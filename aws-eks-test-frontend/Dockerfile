FROM node:10.15.0
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli@7.0.3
COPY . /app
CMD ng serve --host 0.0.0.0