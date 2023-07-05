FROM node:14.17.6-alpine3.14

WORKDIR /app

COPY ./package.json . 
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x /app/development_entrypoint.sh
ENTRYPOINT [ "/app/development_entrypoint.sh" ]
