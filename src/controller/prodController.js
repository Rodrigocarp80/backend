const addProdController = (req,res) => {
    const response = addProdService(req);
    response.json({message: "Producto agregado"});
}