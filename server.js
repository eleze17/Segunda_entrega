const firebase = require("./contenedores/FirebaseCont.js");
const base = new firebase("productos2")
const crudMongo = require('./contenedores/MongoCont')
const mongoProd = new crudMongo('productos')

base.insertar({
    nombre: "sevenup",  categoria: "gaseosa",precio: 500,stock: 260
})


mongoProd.insertar({

    id : 1,
    nombre:'Coca Cola',
    categoria:'Gaseosa',
    precio:500,
    stock:250


})

