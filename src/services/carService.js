const CarModel = require("../models/car.models");

const addCarService = async (request) => {
   try {
    
       const car = request.body;

        if(!car.hasOwnProperty('isNewCar')){
            const date = new Date();
            if(car.year === date.getFullYear()){
                car.isNewCar = true;
            }
        }
       // Aqui abajo,instacionamos un documenteo,es decir,el objeto de Mongo  y le asignamos el valor del objeto que me entra en request
       console.log(car);
       const newCar = new CarModel(car);
       console.log(newCar);
       await newCar.save();
       return {message: "Auto agregado", statusCode : 201};
   } catch (error) {
        return {message : "Ocurrio un error", statusCode : 400};
   }
   };

   module.exports = addCarService;