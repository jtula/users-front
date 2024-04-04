FROM node:alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM development as build

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

FROM node:alpine as production

WORKDIR /app

COPY --from=build /app/dist ./build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "5000"]

EXPOSE 5000