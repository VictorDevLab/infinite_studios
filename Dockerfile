# set the base image to create the image for react app
FROM node:20-alpine


WORKDIR /app

COPY package*.json ./

# USER root

# RUN chown -R app:app .

# USER app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]