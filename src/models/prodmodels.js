const { Schema, model, default: mongoose } = require("mongoose");

const ProdSchema = Schema({
    marca:{
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
    name:{
        type:String,
        required:true
    },
    isNEw:{
        type: Boolean,
        default: false
    }
});

const ProdModel = model('Prod',ProdSchema);
module.exports = ProdModel;