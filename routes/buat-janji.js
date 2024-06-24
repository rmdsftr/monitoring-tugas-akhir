const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'buat-janji.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/buat-janji.html`);
});