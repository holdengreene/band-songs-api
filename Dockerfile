FROM keymetrics/pm2:10-alpine

# Create app directory
WORKDIR /usr/src/api

COPY ./package.json ./yarn.lock pm2.json ./

# Install dependencies
RUN yarn install --production

# Copy over all the files
COPY . .

ENV HOST 0.0.0.0

CMD [ "pm2-runtime", "start", "pm2.json" ]
