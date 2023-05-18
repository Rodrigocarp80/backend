const {addProdService, getAllProdService,getByIdProdService,updateProdService,deleteProdService,getByIdProdPriceService} = require("../services/ProdService");


const getAllProdController = async(req,res) =>{
    const allProd = await getAllProdService(req);
    res.json(allProd);
};
const getByIdProdController = async(req,res) =>{
    const prodById = await getByIdProdService(req);
    res.json(prodById);
};

const addProdController = async(req,res) => {
    const addProd = await addProdService(req);
    res.json(addProd);
};

const updateProdController = async(req,res) => {
    const updateProd = await updateProdService(req);
    res.json(updateProd);
};

const deleteProdController =async(req,res) =>{
    const deleteProd = await deleteProdService(req);
    res.json(deleteProd);
};

const getByIdProdPriceController = async(req,res) =>{
    const prodById = await getByIdProdPriceService(req);
    res.json(prodById);
};



module.exports={addProdController,getAllProdController,getByIdProdController,updateProdController,deleteProdController,getByIdProdPriceController}