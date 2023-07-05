#!/bin/bash
mkdir -p node_modules/
sudo docker build -f entrypoint.dev.dockerfile -t app-frontend:dev .
sudo docker compose -f docker-compose-dev.yml up -d
