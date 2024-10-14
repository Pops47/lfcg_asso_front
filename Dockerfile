FROM node:20.18.0-alpine3.20 AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ARG URL_BACK
ENV VITE_BACK_URL=${URL_BACK:-"http://localhost:3000"}

RUN npm run build


FROM nginx:stable

COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"] 