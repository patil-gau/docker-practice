#Bring base image 
FROM node:alpine

#create a working dir
WORKDIR /var/www/html


#we can optimise how fast node project container is built by doing 
#small changes
#First copy only package.json and do npm install and then copy all files 
#what it does is until any change is done in package.json it will always 
#use cached version and not do npm install every time. Makes building container faster

COPY ./package.json ./
RUN npm install

#bring all your code inside container
#./ where docker file is copy all files from there to ./ -> working dir
COPY ./ ./

CMD ["npm","start"]
