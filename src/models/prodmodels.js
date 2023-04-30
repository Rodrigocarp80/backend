const { Schema, model, default: mongoose } = require("mongoose");

const ProdSchema = Schema({
    
    idProd:{
        type: Number,
        required:true
    },
    brand:{
        type : String,
        required :true
    },
    price:{
        type: Number,
        required : true
    },
    model:{
        type: String,
        required : true
    },
    prodname:{
        type:String,
        required:true
    }
});

const ProdModel = model('Prod',ProdSchema);
module.exports = ProdModel;