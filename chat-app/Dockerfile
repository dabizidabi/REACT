FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx -t