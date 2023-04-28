const express = require('express');
const router = express.Router();

router.get('/prueba',(req,res) =>{
    res.send('Router Funcionando');
});


module.exports = router;