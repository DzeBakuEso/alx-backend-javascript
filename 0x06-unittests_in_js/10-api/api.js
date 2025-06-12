const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
