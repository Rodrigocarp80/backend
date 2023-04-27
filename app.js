 const express = require('express');
 const fs = require('fs/promises');
 
 const app = express();

 const myMiddleware = (req,res,next) =>{
   console.log(`LOG : ${req.method} - ${new Date().getHours()}: ${new Date().getMinutes()}`);
   if(req.method === "GET"){
      return res.send("De mi no vas a obtener nada!!!")
   }
   next();//siempre q se haga un middleware se pone next para q continue

 }

 const PORT = 8080;

 //middleware
 app.use(express.json());//Me parsea a JSON  lo que me entra por body
 app.use(myMiddleware);


/* app.use((req,res,next) =>{
   console.log(`LOG : ${req.method} - ${new Date().getHours()}: ${new Date().getMinutes()}`);
   res.json({message : 'Hasta luego'});
   next();//siempre q se haga un middleware se pone next para q continue

 });*/

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

 app.post('/product',
 (req,res,next) =>{
   const {price} = req.body;
   if(!price)res.json({message : "el producto es necesario"});
   if(price < 1000) res.json('El precio debe ser mayor a 1000');
   if(price>1000) next();
 }
 ,async(req,res) =>{
    const newProduct = req.body;
    const data = await fs.readFile(__dirname+'/src/db/db.txt','utf-8'); 
    const products = JSON.parse(data);
    products.push({id:products.length+1,...newProduct});
    console.log(products);
    const productString = JSON.stringify(products);
    await fs.writeFile(__dirname+'/src/db/db.txt',productString,'utf-8');
    res.json({message : "Agregando nuevo producto"});

 }),

 app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`);
 });