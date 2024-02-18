FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "api/dist/index.js"]
EXPOSE 3000