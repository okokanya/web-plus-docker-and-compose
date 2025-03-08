# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь код
COPY . .

# Собираем приложение (если используется TypeScript)
RUN npm run build

# Открываем порт (например, 3000)
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "run", "start:prod"]
