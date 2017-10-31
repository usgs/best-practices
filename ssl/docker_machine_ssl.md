### DOI SSL Certificate and Docker Machine

When working with Docker containers in a Virtual Machine on the USGS network (such as when using Docker Machine), the DOI SSL intercept certificate needs to be installed on the virtual machine that the Docker engine runs on in order for the Docker engine to be able to manage image pulls from central repositories. 

The process includes copying the SSL certificate from your host up to the Docker virtual machine to a specific location and rebooting the machine. 

In this example. I have the DOI SSL certificate in my ~/Downloads directory. I will create a Docker Machine instance in VirtualBox and add my SSL certificate to it. This is being done on MacOS. This also works well in Linux.

Create the virtual machine using Docker Machine:
```bash
$ export MANAGER_NAME="manager"
$ docker-machine create -d virtualbox $MANAGER_NAME
```

At this point I should have a Docker VM in my list of Docker Machine instances:
```bash
$ docker-machine ls
NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS
manager   *        virtualbox   Running   tcp://192.168.99.100:2376           v17.10.0-ce
```

At first, I will try to pull down a Docker image without the SSL certificate installed:
```bash
$ docker pull hello-world
Using default tag: latest
Error response from daemon: Get https://registry-1.docker.io/v2/: x509: certificate signed by unknown authority
```

The Docker engine complains because it is unable to communicate properly to the DockerHub registry via HTTPS. I now will install the certificate:

```bash
$ echo "sudo mkdir -p /var/lib/boot2docker/certs; \
    echo "\""$(cat ~/Downloads/DOIRootCA2.pem)"\"" | \
    sudo tee -a /var/lib/boot2docker/certs/DOIRootCA2.pem" | \
    docker-machine ssh $MANAGER_NAME && \
    docker-machine restart $MANAGER_NAME

Boot2Docker version 17.10.0-ce, build HEAD : 34fe485 - Wed Oct 18 17:16:34 UTC 2017
Docker version 17.10.0-ce, build f4ffd25
-----BEGIN CERTIFICATE-----
MII...
...Uw=
-----END CERTIFICATE-----
Restarting "manager"...
(manager) Check network to re-create if needed...
(manager) Waiting for an IP...
Waiting for SSH to be available...
Detecting the provisioner...
Restarted machines may have new IP addresses. You may need to re-run the `docker-machine env` command.
```

The first three lines are piped through to the VM using the `docker-machine ssh &lt;machine name&gt;` command. The first line creates a directory within the running VM. The second line reads the certificate on the host and echoes the contents to the `tee` command on the third line which writes the contents to a location in the VM named `/var/lib/boot2docker/certs/DOIRootCA2.pem`. Finally, the last line in the command reboots the VM. When the VM reboots, any certificates in `/var/lib/boot2docker/certs/` will be picked up and combined into the system certificates and used by the Docker engine for HTTPS communication.

Now that my virtual machine has restarted, I set my shell session's docker client to use the engine on the manager machine and try to pull down the helloworld image.

```bash
$ eval $(docker-machine env manager)
$ docker pull hello-world
Using default tag: latest
latest: Pulling from library/hello-world
5b0f327be733: Pull complete
Digest: sha256:07d5f7800dfe37b8c2196c7b1c524c33808ce2e0f74e7aa00e603295ca9a0972
Status: Downloaded newer image for hello-world:latest
```