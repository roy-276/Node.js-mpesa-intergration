const express = require('express');

const app = express();
require('dotenv').config();
const cors = require('cors');
const TokenRoute = require('./routes/token');

app.listen(5000, () => {
  console.log('Server Running');
});

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Mpesa');
});

app.use('/token', TokenRoute);
