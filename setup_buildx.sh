#!/bin/bash

echo "✅ Installing Docker Buildx..."

mkdir -p ~/.docker/cli-plugins/

curl -SL https://github.com/docker/buildx/releases/download/v0.12.0/buildx-v0.12.0.linux-amd64 \
-o ~/.docker/cli-plugins/docker-buildx

chmod +x ~/.docker/cli-plugins/docker-buildx

echo "🛠️ Verifying buildx version..."
docker buildx version

