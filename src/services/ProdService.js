const ProdModel = require("../models/prodmodels");

const getAllProdService = async() =>{
    const allProd = await ProdModel.find();
    return allProd;
}
const getByIdProdService = async(req) =>{
    const {id} = req.params;
    const prodById = await ProdModel.findById(id);
    if(!prodById){
        return {statusCode: 404, message : "Producto not Found"};
    } 
    return prodById;
}

const addProdService = async(req) =>{
    try {
        const prod = req.body;

        const newProd =  new ProdModel(prod);
        await newProd.save();
        return {message : "Producto creado con exito",statusCode: 201};
        
    } catch (error) {
        return {message: "Ocurrio un error", statusCode: 400}
    }
};

const updateProdService =async(req) =>{
    try {
        const{id}=req.params;
        const updateProd = req.body;
        const prodDatabase= await ProdModel.findById(id);
        if(!prodDatabase){
            return {statusCode: 404,message:"Producto no encontrado"};
        }
        prodDatabase.brand=updateProd.brand;
        prodDatabase.price=updateProd.price;
        prodDatabase.model=updateProd.model;
        prodDatabase.prodname=updateProd.prodname;
        prodDatabase.idProd=updateProd.idProd;
        await prodDatabase.save();
        return {message: "Producto Actualizado"};

        
    } catch (error) {
        return {message: "Ocurrio un error"}
    }
};

const deleteProdService = async (req) =>{
    try {
        
        const {id} = req.params;
        const deleteProd = await ProdModel.deleteOne({_id: id});
        if(deleteProd.deletedCount === 0){
            return {statusCode: 404, message : "Producto not Found"};
        } 
    } catch (error) {
        return {message:"Ocurrio un error"};
    }
    
    
}

module.exports = {addProdService, getAllProdService,getByIdProdService,updateProdService,deleteProdService}