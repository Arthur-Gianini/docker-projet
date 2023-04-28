FROM node:20

WORKDIR /server

COPY package.json /server
RUN npm install
RUN npm install -g nodemon

COPY . /server

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
