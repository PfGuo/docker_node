# docker_node
Nodejs on docker

1. Get my file

    `git clone`

2. Get image

    `docker pull node`
   
3. Build your node image

    `docker build -t mynodeapp(your nodejs project name) .(donot forget ".")`
    
4. Run your image and build container

    `docker run -d -p 8888:8888 :id(your image id)`
    
5. Into your container

    `docker exec -i -t (container id) /bin/bash`
    
6. Exit your container

    `exit`
