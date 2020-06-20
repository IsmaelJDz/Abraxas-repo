const express = require('express');
const router = express.Router();
const poligonsController = require('../controllers/poligonsController')

router.get('/', poligonsController.getPoligon);
