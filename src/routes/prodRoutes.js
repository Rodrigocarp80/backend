const express = require('express');
const {addProdController, getAllProdController,getByIdProdController,updateProdController,deleteProdController,getByIdProdPriceController} = require('../controller/prodController');
const checkProdTypes = require('../utils/middleware');
const router = express.Router();


router.get('/product/:id',getByIdProdController);
router.get('/product',getAllProdController);
router.put('/product/:id',checkProdTypes,updateProdController);
router.post('/product',checkProdTypes,addProdController);
router.delete('/product/:id',deleteProdController);
router.get('/product/pricePesos/:id',getByIdProdPriceController); //Consulta el Precio en Pesos del producto con el valor del dolar actual,enviando el id del product




module.exports = router;