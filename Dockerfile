FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
RUN npm install -g pm2
COPY . .
CMD [ "npm", "run", "start:prod" ]
EXPOSE 3000