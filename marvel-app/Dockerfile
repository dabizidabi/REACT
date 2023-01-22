FROM node:18-alpine as dev

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3051

FROM node:18-alpine as builder
WORKDIR /app
COPY --from=dev /app /app/
RUN npm run build

FROM nginx:1.23-alpine
COPY default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx -t
