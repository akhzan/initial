# build environment
FROM node:10.15.0-alpine as builder
RUN mkdir /work
WORKDIR /work
ENV PATH /work/node_modules/.bin:$PATH
COPY package.json /work/package.json
RUN npm install --silent
COPY . /work
RUN npm run build

# production environment
FROM nginx:1.15.8-alpine
COPY --from=builder /work/build /usr/share/nginx/html
EXPOSE 80
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
CMD ["nginx", "-g", "daemon off;"]
