Here's a sample README.md file documenting these Docker commands:


---

Docker Command Guide

This guide covers essential Docker commands for managing containers and images. Each command is presented with examples to simplify usage.


---

1. Run a New Container from an Image

docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Example:

docker run -d -p 80:80 nginx

This command starts an Nginx container in detached mode and maps port 80 on the host to port 80 in the container.


---

2. Execute a Command in a Running Container

docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Example:

docker exec -it my_container /bin/bash

This command opens an interactive shell inside the running container named my_container.


---

3. List Running Containers

docker ps [OPTIONS]

Example:

docker ps -a

This command lists all containers, including stopped ones.


---

4. Build an Image from a Dockerfile

docker build [OPTIONS] PATH | URL | -

Example:

docker build -t my_image .

This command builds an image from a Dockerfile in the current directory and tags it as my_image.


---

5. Download an Image from a Registry

docker pull [OPTIONS] NAME[:TAG|@DIGEST]

Example:

docker pull ubuntu:latest

This command pulls the latest Ubuntu image from Docker Hub.


---

6. Upload an Image to a Registry

docker push NAME[:TAG]

Example:

docker push my_repo/my_image:latest

This command pushes my_image with the latest tag to my_repo.


---

7. List Images

docker images [OPTIONS] [REPOSITORY[:TAG]]

Example:

docker images

This command lists all available images on your system.


---

8. Log In to a Docker Registry

docker login [OPTIONS] [SERVER]

Example:

docker login

This command logs you into Docker Hub or a specified registry.


---

9. Log Out from a Docker Registry

docker logout [SERVER]

Example:

docker logout

This command logs you out from Docker Hub or a specified registry.


---

10. Search for an Image on Docker Hub

docker search [OPTIONS] TERM

Example:

docker search nginx

This command searches Docker Hub for images related to nginx.


---

11. Display Docker Version Information

docker version

Example:

docker version

This command shows the installed Docker version.


---

12. Display System-wide Information

docker info

Example:

docker info

This command provides detailed information about the Docker setup, including container and image counts.


---

Save this as README.md and include it in your project directory to provide a quick reference for Docker commands.

