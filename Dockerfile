FROM node:20

WORKDIR /bergen_savanna_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8083

CMD ["npm", "run", "start"]