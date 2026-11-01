const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/readyz',(req,res)=>{
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  })
  res.status(200).json({
    status: 'ready',
    environment: process.env.NODE_ENV || 'development'
  })
})
app.get('/api/orders', (req, res) => {
  res.status(200).json({ orders: [] });
});

app.listen(PORT, () => {
  console.log(`Order routing service listening on port ${PORT}`);
});
