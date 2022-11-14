const { Router } = require("express")
const productsRouter = Router()
const firebase = require("../contenedores/FirebaseCont.js");
const base = new firebase("productos")
const crudMongo = require('../contenedores/MongoCont')
const mongoProd = new crudMongo('productos')
const validarBase = require('../midlewares/validarBase')



productsRouter.get('/:id?',validarBase,
(req,res)=>{
    if (req.base =='mongo'){mongoProd.leer(req.params.id,res)}
else{
base.selectOne(req.params.id,res)
}})

productsRouter.post('/',(req,res)=>{

    mongoProd.insertar(req.body,res)
    base.insertar(req.body,res)
    

   })


productsRouter.put('/:id?',validarBase,
    (req,res)=>{
        if (req.base =='mongo'){mongoProd.actualizar(req.params.id,req.body,res)}
    else{
    base.update(req.params.id,req.body,res)
    }})


productsRouter.delete('/:id?',validarBase,(req,res)=>{
    if (req.base =='mongo'){mongoProd.eliminar(req.params.id,res)}
else{
base.delete(req.params.id,res)
}})

module.exports = productsRouter