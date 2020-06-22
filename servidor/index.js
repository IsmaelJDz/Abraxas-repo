const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());

app.use(express.json({ extended: true }));

app.use('/', require('./routes/'));

app.listen(4000, () => {
  console.log('server');
});
