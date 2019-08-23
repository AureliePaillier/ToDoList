let express = require('express');
let router = express.Router();
let db = require(`../models/product.model.js`);

const product_controller = require('../controllers/product.controller');

// .home est une méthode qui appelle
//router.get('/', product_controller.home);
router.post('/create', product_controller.product_create);
router.get('/list', product_controller.product_list);
router.put('/list', product_controller.product_list);
router.delete('/list', product_controller.product_list);

module.exports = router;