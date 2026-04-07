FROM nginx:alpine

COPY index.html styles.css app.js data.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
