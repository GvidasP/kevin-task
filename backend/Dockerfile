FROM mhart/alpine-node:8.11.4
WORKDIR /backend
COPY package*.json /backend/
RUN npm install
COPY . /backend/
EXPOSE 5000
CMD ["npm", "start"]