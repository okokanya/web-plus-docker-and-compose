# Используем официальный образ Node.js для сборки
FROM node:18-alpine AS build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем код и собираем фронтенд
COPY . .
RUN npm run build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранный фронтенд в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
