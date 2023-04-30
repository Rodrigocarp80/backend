

const checkProdTypes = (req,res,next) => {
        const Cprod = req.body;
        const arrayOfValidations = [];
        if(typeof Cprod.idProd !== "number"){arrayOfValidations.push("El id debe ser un  numero")}
        if(typeof Cprod.brand !== "string"){arrayOfValidations.push("La Marca debe ser un  String")}
        if(typeof Cprod.price !== "number"){arrayOfValidations.push("El precio debe ser un numero")}
        if(typeof Cprod.model !== "string"){arrayOfValidations.push("El modelo debe ser String")}
        if(typeof Cprod.prodname !== "string"){arrayOfValidations.push("El nombre debe ser String")}
        if(arrayOfValidations.length > 0 ) return res.json({statusCode: 400, message: "Revisa el objeto enviado"})

        next();
    }

    module.exports = checkProdTypes;