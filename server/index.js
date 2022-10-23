const express = require('express');

const app = express();

app.listen(5000, () => {
  console.log('Server Running');
});

app.get('/', (req, res) => {
  res.send('Mpesa');
});
