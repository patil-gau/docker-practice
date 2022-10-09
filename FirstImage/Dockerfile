# We write instructions inside DockerFile like RUN,FROM,etc

#steps 
#1.Install OS/Base Image
#2.Install the software
#2.5 Some softwares might require configure
#3 Run the installed software


#base image or os
#alpine is a os based on linux kernel
FROM alpine
#install any software on this os in this container using RUN
# RUN apk add binutils
#consider if we want to install mongodb and alpine doesnot know where to get it from
#so we can ask to get it from these repo links
#ubuntu might know it by default
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0
#since mongodb is a service we need to configure it 
VOLUME ["data/db"]
#if cmd is opened it will be landing here
WORKDIR /data
EXPOSE 27017

#start mongod server
CMD [ "mongod" ]





