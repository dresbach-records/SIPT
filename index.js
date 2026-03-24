const express = require('express');
const loteRoutes = require('./routes/loteRoutes');
const corteRoutes = require('./routes/corteRoutes');
const producaoRoutes = require('./routes/producaoRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', loteRoutes);
app.use('/api', corteRoutes);
app.use('/api', producaoRoutes);
app.use('/api', estoqueRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});