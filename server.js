// server/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Разрешаем CORS для фронтенда на Next.js
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware для парсинга JSON
app.use(express.json());

// Пример маршрута
app.get('/api/users', (req, res) => {
  res.json([
  
  ]);
});

// Запуск сервера
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
