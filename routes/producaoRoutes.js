const express = require('express');
const router = express.Router();
const producaoController = require('../controllers/producaoController');

router.get('/producao', producaoController.getAllProducao);
router.post('/producao', producaoController.createProducao);
router.put('/producao/:id', producaoController.updateProducao);
router.delete('/producao/:id', producaoController.deleteProducao);

module.exports = router;