FROM node:16-alpine
WORKDIR /Reac-WorkSearch-app
COPY . . /Reac-WorkSearch-app/
RUN npm install
CMD ["npm", "start"]