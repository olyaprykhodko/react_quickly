ARG BASE_IMAGE="node"
ARG BASE_IMAGE_TAG="20-alpine"
ARG BASE_DIR="/data"
ARG CONTAINER_USER="root"
ARG SOURCE_DIR="."
ARG APP_PORT=3000

FROM ${BASE_IMAGE}:${BASE_IMAGE_TAG}

ARG BASE_DIR
ARG CONTAINER_USER
ARG SOURCE_DIR
ARG APP_PORT

ENV APP_PORT=${APP_PORT}

WORKDIR ${BASE_DIR}

COPY --chown=${CONTAINER_USER} ${SOURCE_DIR} ${BASE_DIR}

RUN set -x && \
    apk upgrade --no-cache --update-cache && \
    apk add --no-cache \
    wget \
    openssl \
    zlib && \
    npm install && \
    mkdir -p /.npm && \
    chown -R ${CONTAINER_USER}.${CONTAINER_USER} ${BASE_DIR} /.npm

USER ${CONTAINER_USER}

EXPOSE ${APP_PORT}

CMD npm start
