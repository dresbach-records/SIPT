import express from 'express';
import 'dotenv/config';
import loteRoutes from './routes/loteRoutes.js';
import corteRoutes from './routes/corteRoutes.js';
import producaoRoutes from './routes/producaoRoutes.js';
import estoqueRoutes from './routes/estoqueRoutes.js';

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
