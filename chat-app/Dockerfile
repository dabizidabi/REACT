FROM node:18-alpine as dev

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3050

FROM node:18-alpine as builder
WORKDIR /app
COPY --from=dev /app /app/
RUN npm run build

FROM nginx:1.23-alpine as prod
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx -t