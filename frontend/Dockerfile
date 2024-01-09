FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD npm run dev