#!/bin/bash
echo "# Required" > .env

if [ -z "$DEPLOYMENT_ID" ]; then
  echo "NODE_ENV=development" >> .env
  echo "PORT=5000" >> .env
  echo "SERVER_DATABASE_URL=postgres://root:root@localhost:5442/api" >> .env
  echo "SERVER_AUTHENTICATION_SECRET=your-secret" >> .env
  echo "SERVER_CLIENT_BASE_URL=http://localhost:3000" >> .env
  echo "SERVER_BASE_URL=http://localhost:5000" >> .env
fi

echo "SERVER_AUTHENTICATION_TOKEN_METHOD=header" >> .env