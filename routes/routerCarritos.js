const { Router } = require("express")
const cartRouter = Router()
const firebase = require("../contenedores/FirebaseCont.js");
const base = new firebase("carritos")
const crudMongo = require('../contenedores/MongoCont')
const mongoProd = new crudMongo('carritos')
const validarBase = require('../midlewares/validarBase')



cartRouter.get('/:id?',validarBase,
(req,res)=>{
    if (req.base =='mongo'){mongoProd.leer(req.params.id,res)}
else{
base.selectOne(req.params.id,res)
}})

cartRouter.post('/',(req,res)=>{

    mongoProd.insertar(req.body,res)
    base.insertar(req.body,res)
    

   })


   cartRouter.put('/:id?',validarBase,
    (req,res)=>{
        if (req.base =='mongo'){mongoProd.actualizar(req.params.id,req.body,res)}
    else{
    base.update(req.params.id,req.body,res)
    }})


    cartRouter.delete('/:id?',validarBase,(req,res)=>{
    if (req.base =='mongo'){mongoProd.eliminar(req.params.id,res)}
else{
base.delete(req.params.id,res)
}})

module.exports = cartRouter