FROM nginx:latest

VOLUME /var/cache/nginx

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
