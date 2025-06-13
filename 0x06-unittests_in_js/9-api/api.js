const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart endpoint — use middleware to validate numeric ID
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  // Validate if id is a positive integer
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Not Found');
  }

  res.send(`Payment methods for cart ${id}`);
});

// Start server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
