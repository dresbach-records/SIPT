import express from 'express';
import {
  getAllCortes,
  createCorte,
  updateCorte,
  deleteCorte,
} from '../controllers/corteController.js';

const router = express.Router();

router.get('/corte', getAllCortes);
router.post('/corte', createCorte);
router.put('/corte/:id', updateCorte);
router.delete('/corte/:id', deleteCorte);

export default router;
