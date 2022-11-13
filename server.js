const firebase = require("./contenedores/FirebaseCont.js");
const base = new firebase("productos")
const crudMongo = require('./contenedores/MongoCont')
const mongoProd = new crudMongo('productos')





/*
base.insertar({
    nombre: "sevenup",  categoria: "gaseosa",precio: 500,stock: 260
})*/

//base.selectOne("Qeue2lFuEozdSOCjIm2d")

//base.selectAll()

//base.update("Qeue2lFuEozdSOCjIm2d",{nombre:"Fanta"})

base.delete("Qeue2lFuEozdSOCjIm2d")

/*
mongoProd.insertar({

    id : 4,
    nombre: 'queso',
    categoria:'lacteos',
    precio:800,
    stock:60


})
*/
/*

mongoProd.leer({
    nombre:"agua"
})
*//*
mongoProd.eliminar({
    nombre:"queso"
})*/


//mongoProd.actualizar({id:1},{nombre:"Cocucha"})