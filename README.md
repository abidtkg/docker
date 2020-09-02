
Build Docker Image

    docker build -t imageName .
    
Run a Docker Container

    docker run -it -p myPort:dockerPort imageName:version

Stop a Docker Container
    
    docker stop dynamicName

Remove a Docker Image

        docker rmi Image imageName
        DOC: https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

Permisson Issue

    Issue:
    Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied

    solve:
    sudo chmod 666 /var/run/docker.sock