const express = require('express');
const router = express.Router();

/**
 * import controller
 */
const polygonsController = require('../controllers/polygonsController');

router.get('/:polygon', polygonsController.polygon);

module.exports = router;
