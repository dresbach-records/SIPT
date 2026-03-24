const express = require('express');
const router = express.Router();
const loteController = require('../controllers/loteController');

router.get('/lotes', loteController.getAllLotes);
router.post('/lotes', loteController.createLote);
router.put('/lotes/:id', loteController.updateLote);
router.delete('/lotes/:id', loteController.deleteLote);

module.exports = router;