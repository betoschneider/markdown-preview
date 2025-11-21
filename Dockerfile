# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Configure Nginx to listen on 8510
RUN sed -i 's/listen       80;/listen       8510;/' /etc/nginx/conf.d/default.conf
EXPOSE 8510
CMD ["nginx", "-g", "daemon off;"]
