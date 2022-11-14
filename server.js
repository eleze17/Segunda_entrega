const express = require('express') 
const productsRouter = require('./routes/routerProductos') 
const cartRouter = require('./routes/routerCarritos')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productsRouter)
app.use('/api/carritos', cartRouter)


const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))







































/*const firebase = require("./contenedores/FirebaseCont.js");
const base = new firebase("productos")
const crudMongo = require('./contenedores/MongoCont')
const mongoProd = new crudMongo('productos')*/





/*
base.insertar({
    nombre: "sevenup",  categoria: "gaseosa",precio: 500,stock: 260
})*/

//base.selectOne("Qeue2lFuEozdSOCjIm2d")

//base.selectAll()

//base.update("Qeue2lFuEozdSOCjIm2d",{nombre:"Fanta"})

//base.delete("Qeue2lFuEozdSOCjIm2d")

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