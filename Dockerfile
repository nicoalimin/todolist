################################
# Build the Distribution Bundle
################################
FROM node:10.19.0-alpine3.10 AS build

LABEL maintainer="Nico Alimin <nicoalimin@yahoo.com>"

WORKDIR /client

COPY . .

RUN yarn install --production && \
  yarn build

################################
# Copy the dist to final image
################################
FROM node:10.19.0-alpine3.10

WORKDIR /client

RUN npm install -g serve

RUN mkdir -p /client/build
COPY --from=build /client/build /client/build

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]