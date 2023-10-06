const express = require('express');
const app = express();
const PORT = 3307;
const db = require('./utils/db');

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});