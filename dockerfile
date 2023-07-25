FROM node:18

WORKDIR /
COPY package*.json /
COPY .npmrc /
COPY dist/ /dist/

ENV SWAGGER_PORT=8080

# ENV SWAGGER_ENDPOINT=/api-docs
# ENV SWAGGER_ENDPOINT_TRY_ADD_VERSION=true

EXPOSE 8080

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci
CMD ["npm", "start"]