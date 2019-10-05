FROM mhart/alpine-node:10.16.3
WORKDIR /client
COPY package.json /client/
RUN yarn
COPY . /client/
EXPOSE 4200
CMD ["yarn", "start"]