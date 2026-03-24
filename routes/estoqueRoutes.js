const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.get('/estoque', estoqueController.getAllEstoque);
router.post('/estoque', estoqueController.createEstoque);
router.put('/estoque/:id', estoqueController.updateEstoque);
router.delete('/estoque/:id', estoqueController.deleteEstoque);

module.exports = router;