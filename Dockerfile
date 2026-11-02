FROM node:20-alpine
WORKDIR /app
COPY package.json server.js ./
COPY .env.example ./
RUN mkdir -p /app/data
ENV NODE_ENV=production
EXPOSE 8787
USER node
CMD ["node","server.js"]
