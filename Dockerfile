FROM node:alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Agrega la variable de entorno REACT_APP_API_URL
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Compila la aplicación React
RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=build /app/build .

RUN npm install -g serve

CMD ["serve", "-s", "."]

EXPOSE 3000