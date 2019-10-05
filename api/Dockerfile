FROM mhart/alpine-node:10.16.3
WORKDIR /api
COPY package.json /api/
RUN yarn
COPY . /api/
EXPOSE 80
CMD ["yarn", "start"]