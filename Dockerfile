FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production \
    && npm install pm2 -g

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "start", "server.js", "-i", "max"]