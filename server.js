const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/orders', (req, res) => {
  res.status(200).json({ orders: [] });
});

app.listen(PORT, () => {
  console.log(`Order routing service listening on port ${PORT}`);
});
