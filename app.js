 const express = require('express');
 const fs = require('fs/promises');
 
 const app = express();

 const PORT = 8080;

 app.use(express.json());//Me parsea a JSON  lo que me entra por body

 app.get('/product',async(req,res) =>{
   const data = await fs.readFile(__dirname+'/src/db/db.txt','utf-8');

   res.json(JSON.parse(data));
 });

 app.get('/product/:id',async(req,res) =>{
    const id = req.params.id;
    const data = await fs.readFile(__dirname+'/src/db/db.txt','utf-8');
    const products = JSON.parse(data);
    const product = products.find(product => product.id === Number(id));

    if(!product) res.json({message: "Product no found"})
    res.json(product);

 });

 app.post('/product',async(req,res) =>{
    const newProduct = req.body;
    const data = await fs.readFile(__dirname+'/src/db/db.txt','utf-8');

 }),

 app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`);
 });