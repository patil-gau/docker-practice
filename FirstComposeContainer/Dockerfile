FROM node:alpine

WORKDIR /gautam

COPY ./package.json ./
RUN npm install

COPY ./ ./
CMD ["npm","start"]
