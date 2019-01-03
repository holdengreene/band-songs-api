FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/api

COPY ./package.json ./yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy over all the files
COPY . .

ENV HOST 0.0.0.0

CMD ["yarn", "start"]
