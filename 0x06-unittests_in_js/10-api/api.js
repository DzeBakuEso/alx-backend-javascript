// api.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id))) {
    res.status(404).send();
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400).send('Missing userName');
  } else {
    res.send(`Welcome ${userName}`);
  }
});

// Only start server if run directly, not when imported for testing
if (require.main === module) {
  app.listen(7865, () => {
    console.log('API available on localhost port 7865');
  });
}

module.exports = app;
