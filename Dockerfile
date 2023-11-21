# base image installation
FROM node:18-alpine

WORKDIR /app
# ye code bta rha hai ki container me hmari directory koun si hogi

# COPY source dest
# source define kar rha hai hamare working directory ko
# dest define kar raha hai use folder ko jo container me rahega
COPY package.json .
RUN npm install

# COPY server.js pakage.json /app/
# is code is se server .js and pakage.json file push hoga container ke app directory me
# COPY . /app/
# server folder se jitne bhi dile hai push ho jayenge container ke app directory me
COPY . .
# first dot bta rha hai hmara source folder and second wala hmare container ka directory
# RUN npm install
RUN npm install -g nodemon
# ye code hmare jo bhi jaruri module ya packages hai usko container me install krega and also genrate node_module folder

EXPOSE 4000
CMD [ "npm", "run","dev" ]
# ENTRYPOINT [ "executable" ]
# CMD ke jagah ye bhi likh skte hai 
# ye code hmare project ko container me run karega
# ye code hmesa last me chalega after build app


# docker image build -t server-img .  ---------->>to create new image in docker 
# docker images , docker image ls ------------------>> to view all the images
# docker container ls-------------->>to view all the container jo chal rha hai
# docker container ls -a -------------->>to view all the container
# docker container start container_id{07fc4e1733b3}------>> to start existing container
# docker exec -it 07fc4e1733b3 sh-------->>container ke ander shell open krne ka command
# docker container stop 07fc4e1733b3----------->>container ko stop krne ka command
# docker container run -d --name c1 server-img---------->>to rename the container
# docker logs c1---------->docker logs dekhne ka command
# docker container stop c1------------>>to stop docker container with name
# docker container run -d -p 4000:4000 --name c3 server-img-1-------------->>port map krna systemka docker container se basically dono server ko ek port me chalana
# docker container prune------------------>> to remove stop container
# docker images  prune------------------>> to remove dangling image
# docker system prune--------------------->>to remove dangling image and container
# docker system prune -a--------------------->>to remove running and dangling image and container

# docker tag local-image:tagname new-repo:tagname------------->>create tage or create origin from remote location of dockerhub
# docker push new-repo:tagname---------------->>push the docker file to dockerhub
# -----we can also write-------------
# docker tag server-img-1 dageshwar07/server-img-1:tag-------------->>create tage or create origin from remote location of dockerhub
# docker push dageshwar07/server-img-1:tag------------------->>push the docker file to dockerhub

