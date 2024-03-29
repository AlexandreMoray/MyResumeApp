FROM node:lts-alpine

RUN npm install -g http-server

RUN npm -v

RUN node -v

WORKDIR /resume-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
