FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY .env .env

COPY . .

RUN npm run build

CMD ["npm", "run", "dev:custom"]

EXPOSE 3000
