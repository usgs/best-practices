# Instructions for enabling the DOI Root Certificate for Python

1. Click this link to download a file called "DOIRootCA2.cer": http://sslhelp.doi.net/docs/DOIRootCA2.cer
1. Tell conda where to find you SSL certificate store: `conda config --set ssl_verify <pathToYourFile>.cer`
1. The above command adds a line to your `$HOME/.condarc` file or `%USERPROFILE%\.condarc` file on Windows that looks like:
`ssl_verify: <pathToYourFile>.cer`
1. If you leave the USGS network, you can just comment out that line in the `.condarc` with a `#` and uncomment when you return.
1. If you have problems, make sure that you are using the latest version of `curl`, checking both the `conda-forge` and `anaconda` channels.
