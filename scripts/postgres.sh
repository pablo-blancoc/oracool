#!/bin/bash

CONTAINER_NAME="postgres-oracooool"

# Stop and remove the container if it exists
if docker ps -a --format '{{.Names}}' | grep -Eq "^$CONTAINER_NAME$"; then
    echo "Stopping and removing existing container '$CONTAINER_NAME'..."
    docker stop "$CONTAINER_NAME" >/dev/null
    docker rm "$CONTAINER_NAME" >/dev/null
fi

# Run the Postgres instance
docker run -d \
    --name $CONTAINER_NAME \
    -p 5432:5432 \
    -v pgdata:/var/lib/postgresql/data \
    -e POSTGRES_HOST_AUTH_METHOD=trust \
    postgres:latest
echo "Postgres instance '$CONTAINER_NAME' started."
