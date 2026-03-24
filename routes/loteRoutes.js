import express from 'express';
import {
  getAllLotes,
  createLote,
  updateLote,
  deleteLote,
} from '../controllers/loteController.js';

const router = express.Router();

router.get('/lotes', getAllLotes);
router.post('/lotes', createLote);
router.put('/lotes/:id', updateLote);
router.delete('/lotes/:id', deleteLote);

export default router;
