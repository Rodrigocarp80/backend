const express = require('express');
const {addProdController, getAllProdController,getByIdProdController,updateProdController,deleteProdController} = require('../controller/prodController');
const checkProdTypes = require('../utils/middleware');
const router = express.Router();


router.get('/product/:id',getByIdProdController);
router.get('/product',getAllProdController);
router.put('/product/:id',checkProdTypes,updateProdController);
router.post('/product',checkProdTypes,addProdController);
router.delete('/product/:id',deleteProdController);





module.exports = router;