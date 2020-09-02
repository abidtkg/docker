
    Build Docker Image
        docker build -t test-node .
    
    Run a Docker Container
        docker run -it -p myPort:dockerPort imageName:version

    Stop a Docker Container
        docker stop dynamicName