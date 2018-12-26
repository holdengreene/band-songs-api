FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy over all the files
COPY . .

CMD ["node", "index.js"]

