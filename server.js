const express = require('express');
const app = express();

const cementRoutes = require('./routes/cement');
const orderRoutes = require('./routes/order');

app.use('/cement', cementRoutes);
app.use('/order', orderRoutes);

app.get('/', (req, res) => {
  res.send('Sakthi Steels Backend Running 🧱');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
