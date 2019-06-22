FROM node:latest

WORKDIR /opt/app
COPY backend /opt/app/backend
COPY package.json /opt/app
COPY nodemon.json /opt/app

# Install dependencies
RUN npm install --quiet --no-audit

USER node

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run", "dev"]
