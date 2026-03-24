import express from 'express';
import {
  getAllEstoque,
  createEstoque,
  updateEstoque,
  deleteEstoque,
} from '../controllers/estoqueController.js';

const router = express.Router();

router.get('/estoque', getAllEstoque);
router.post('/estoque', createEstoque);
router.put('/estoque/:id', updateEstoque);
router.delete('/estoque/:id', deleteEstoque);

export default router;
