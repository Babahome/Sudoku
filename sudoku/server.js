'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT || '8099', 10);

app.use(express.static(path.join(__dirname, 'www'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('sw.js') || filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Sudoku listening on ${PORT}`));
