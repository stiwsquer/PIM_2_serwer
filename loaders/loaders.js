const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:19002',
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

module.exports = { app };
