const ProdModel = require("../models/prodmodels");

const addProdService = (req) =>{
    const prod = req.body;
    ProdModel.create(prod);
}