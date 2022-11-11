const mongoose = require('mongoose')

const productosColeccion = 'productos';

const productosSchema= new mongoose.Schema({
                id : {type: Number,require:true},
                nombre:{type: String,require:true,max:200},
                categoria:{type: String,require:false,max:200},
                precio:{type: Number,require:true},
                stock:{type: Number,require:true}


})


 const productos = mongoose.model(productosColeccion,productosSchema);

const carritosColeccion = 'carritos';

const carritosSchema= new mongoose.Schema({
                id : {type: Number,require:true},
                productos:{type: Array,require:true},
                monto:{type: String,require:false,max:200},
                usuarioCarrito:{type: Number,require:true},
                time:{type: Date, default: Date.now}


})

 const carritos = mongoose.model(carritosColeccion,carritosSchema);

 module.exports=  {productos,carritos

 }