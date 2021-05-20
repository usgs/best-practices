Working within SSL Intercept
============================

This page details how to get many different programs working within the DOI's SSL intercept solution. For an overview of SSL Intercept in general, see [this Dell Secureworks explanation](https://www.secureworks.com/research/transitive-trust).

# 0) Get the SSL Intercept Root Certificate
* Unfortunately, the certificate itself is not available securely. This means that the certificate could be tampered with if you try to download it over an untrusted network. Before you download it, verify that your machine is connected to a DOI network.
   * OK:
      * Plugged in to the network in a DOI building
      * Using the VPN from home
      * Using the VPN from a coffee shop
      * Using the VPN from wifi in a DOI building
    * Not OK:
       * Using most wifi connections in DOI buildings without using the VPN.
       * Using wifi at home without using the VPN
       * Using wired internet at home without using the VPN
       * Using wifi at a coffee shop without using the VPN
       * While it is possible to download a certificate using any of these unsafe means, the file is subject to tampering in transit so if your download leaves the DOI network, you might be getting a malicious certificate instead of the real thing. Until the certificate is available securely, it is important that your download takes place over the DOI network.
 * Once you have verified that your machine is connected to a DOI network, download the new DOI Root Certificate Authority certificate from here:
 * http://sslhelp.doi.net/docs/DOIRootCA2.cer

# 1) Build complete CA file including SSL Intercept certificate

## Linux:

On linux systems the `.crt` extension matters. The following script may be
of some use on RedHat (and similar) or Debian (and similar) distributions:
```sh
#!/bin/bash

INTERCEPT_CERT_URL="http://sslhelp.doi.net/docs/DOIRootCA2.cer"

if [ -f /etc/redhat-release ] ; then
  echo "Installing for Cent/RHEL 32"
  yum -y install ca-certificates
  update-ca-trust force-enable
  wget $INTERCEPT_CERT_URL -N -P /etc/pki/ca-trust/source/anchors/
  update-ca-trust extract
else
  echo "Installing for Debian/Ubuntu"
  wget $INTERCEPT_CERT_URL -N -P /usr/share/ca-certificates/extra/
  echo "extra/CustomCA.crt" >> /etc/ca-certificates.conf
  update-ca-certificates
fi
```
Administrators using Chef to manage their infrastructure might also find from the [CIDA Chef Cookbook](https://github.com/USGS-CIDA/chef-cookbook-doi-ssl-filtering) (CentOS 6/7).

### Debian
As root:
```
apt-get install ca-certificates
mkdir -p /usr/local/share/ca-certificates
cp CustomCA.crt /usr/local/share/ca-certificates/.
update-ca-certificates
```

CA file:
`/etc/ssl/certs/ca-certificates.crt`

### RedHat (and variants CentOS/Scientific Linux)
As root:
```
yum install ca-certificates
update-ca-trust enable
cp CustomCA.crt /etc/pki/ca-trust/source/anchors/.
update-ca-trust extract
```

CA file:
`/etc/pki/tls/certs/ca-bundle.crt`

> Note: there is another file `/etc/pki/tls/certs/ca-bundle.trust.crt` that
> uses a custom OpenSSL format, which causes problems for other TLS libraries
> like GnuTLS.


## OS X
OS X stores certificates in the keychain, which is not used by most command line
tools.

Start by copying an existing CA certificate bundle.  There are a couple options:
- copy from a linux distro
- copy the openssl bundle from homebrew
  ( /path/to/homebrew/etc/openssl/cert.pem )
- download the Mozilla bundle from cURL
  ( https://curl.haxx.se/ca/cacert.pem )

Then add the custom certificate to the end:
```
# setup CA certificate bundle
CA_FILE=$HOME/cacert.pem
# add a trailing newline character
echo >> $CA_FILE
# add custom certificate
cat CustomCA.crt >> $CA_FILE
```

CA file:
`$HOME/cacert.pem`


# 2) Configure apps to use complete CA file
The examples below reference file as `/path/to/cert.pem`, and should be
updated to reference the system dependent CA file path.  The examples below
also assume `bash` is used as the default shell, and can be updated to modify
other shell environments.

Many applications use the `SSL_CERT_FILE` environment
variable as a source for certificate authorities.
Configure `SSL_CERT_FILE` environment variable in `$HOME/.bash_profile`
```
export SSL_CERT_FILE=/path/to/cert.pem
```

## Anaconda python environments
Configure `ssl_verify` variable
```
conda config --set ssl_verify <pathToYourFile>.pem
```
The above command adds a line to your `$HOME/.condarc file` or `%USERPROFILE%\.condarc` file on Windows that looks like: `ssl_verify: <pathToYourFile>.pem`.  If you leave the USGS network, you can just comment out the `ssl_verify:` line in the `.condarc` with a `#` and uncomment when you return. If you have problems, make sure that you are using the latest version of `curl`, checking both the `conda-forge` and `anaconda` channels.

## cURL
Configure ```CURL_CA_BUNDLE``` environment variable in ```$HOME/.bash_profile```

```sh
export CURL_CA_BUNDLE=/path/to/cert.pem
```

## Docker, Docker Machine
Detailed [here](docker_machine_ssl.md).

## Git
Detailed [here](UsingGitWithHTTPSInterception.md).

## Java
Java applications use a system/application keystore for CA certificates in a file called *cacerts* located in `$JAVA_HOME/jre/lib/security`. The certificate can be imported from the command line, with administrative rights. For example:
### Linux and MacOS
```sh
cd $JAVA_HOME/lib/security
keytool -import -file /path/to/YourCert.crt -alias YourCert -keystore cacerts
```
The default keytool password is: changeit

## Node

Older versions of Node ignore the SSL_CERT_FILE environment variable.
This has been fixed in Node v7.7.0.

Applications should attempt to configure their ssl library of choice globally
based on the `SSL_CERT_FILE` environment variable at startup.

See [Node SSL Intercept Example](./node_ssl_intercept.js) for an example with
the Node HTTPS library.

## NPM
- Configure `cafile` in `$HOME/.npmrc`
```
cafile=/path/to/cert.pem
```
To install packages globally via commands like `sudo npm install --global less`, you may need to add the same line to `/root/.npmrc`.

- Or, configure `NPM_CONFIG_CAFILE` environment variable in `$HOME/.bash_profile`:
```sh
export NPM_CONFIG_CAFILE=/path/to/cert.pem
```

## Bower
Configure `ca` in `$HOME/.bowerrc`
```
{
"ca": "/path/to/cert.pem"
}
```
or you can use the option `--config.ca=/path/to/cert.pem` when using the bower command to install packages

## Pip
Even when using Anaconda virtual environments, some packages must be installed
using pip.

Configure `PIP_CERT` environment variable in `$HOME/.bash_profile`.
```
export PIP_CERT=/path/to/cert.pem
```

## Python
Python uses the `SSL_CERT_FILE` environment variable (see above).

## VS Code
Visual Studio Code is based on Chromium. On Linux, Chromium uses the Mozilla Network Security Services library and database. Install [Mozilla NSS `certutil`](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/tools/NSS_Tools_certutil), then add the DOI Root CA cert.

```sh
certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "doi-root-ca" -i DOIRootCA2.cer
```

## Wget
Configure `ca_certificate` in `$HOME/.wgetrc`
```
ca_certificate=/path/to/cert.pem
```
