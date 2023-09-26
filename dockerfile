FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8000
EXPOSE 8000