const express = require('express');

const app = express();

app.use(express.json({ extended: true }));

app.get('/poligons?name=mex', (req, res) => {
  console.log(res.params);
  res.status(200).json('msg: ok');
});

app.listen(4000, () => {
  console.log('server');
});
