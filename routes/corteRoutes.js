const express = require('express');
const router = express.Router();
const corteController = require('../controllers/corteController');

router.get('/corte', corteController.getAllCortes);
router.post('/corte', corteController.createCorte);
router.put('/corte/:id', corteController.updateCorte);
router.delete('/corte/:id', corteController.deleteCorte);

module.exports = router;