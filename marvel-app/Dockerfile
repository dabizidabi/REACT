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
COPY --chown=nginx:nginx default.conf /etc/nginx/conf.d/
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html
RUN touch /var/run/nginx.pid && \
        chown -R nginx /var/run/nginx.pid
RUN chown -R nginx /var/cache/nginx && chown -R nginx /var/log/nginx && chown -R nginx /run
RUN nginx -t
USER nginx
