const express = require('express');
const cors = require('cors');
const app = express();
const port = 9090;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.use('/npm', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})