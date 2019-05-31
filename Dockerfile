FROM node as build
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build

FROM nginx:mainline-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
