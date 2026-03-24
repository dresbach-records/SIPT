import express from 'express';
import {
  getAllProducao,
  createProducao,
  updateProducao,
  deleteProducao,
} from '../controllers/producaoController.js';

const router = express.Router();

router.get('/producao', getAllProducao);
router.post('/producao', createProducao);
router.put('/producao/:id', updateProducao);
router.delete('/producao/:id', deleteProducao);

export default router;
