FROM node:19-alpine
ENV NODE_ENV = 'development'
ENV PORT = '5000'
ENV MONGO_URI = ''



WORKDIR /

COPY package*.json .

RUN npm install --force

COPY . .

EXPOSE 5000

CMD ["node","index.js"]
