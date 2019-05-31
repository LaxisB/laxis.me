FROM node
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build

FROM nginx:mainline-alpine
COPY --from=0 /app/build /usr/share/nginx/html