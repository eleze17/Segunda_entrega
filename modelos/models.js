const mongoose = require('mongoose')

const productosColeccion = 'productos';

const productosSchema= new mongoose.Schema({
                id : {type: Number,required:true},
                nombre:{type: String,required:true,max:200},
                categoria:{type: String,required:false,max:200},
                precio:{type: Number,required:true},
                stock:{type: Number,required:true}


})


 const productos = mongoose.model(productosColeccion,productosSchema);

const carritosColeccion = 'carritos';

const carritosSchema= new mongoose.Schema({
                id : {type: Number,required:true},
                prods:{type: Array,required:true},
                monto:{type: String,required:false,max:200},
                usuarioCarrito:{type: String,required:true},
                time:{type: Date, default: Date.now}


})

 const carritos = mongoose.model(carritosColeccion,carritosSchema);

 module.exports=  {productos,carritos

 }