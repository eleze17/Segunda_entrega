require('dotenv').config()
const mongoose = require('mongoose')
const productos = require('../modelos/models.js')
const carritos = require('../modelos/models.js')



mongoose.connect(process.env.cadenaConex)
console.log('mongoatlas conectado')

 class crudMongo{
    constructor(model){
        this.model = model
    }

    async  insertar(docu){
        if (this.model = "productos"){
                const docNuevo =  new productos(docu)}
        else {
            const docNuevo =  new carritos(docu)}
            await docNuevo.save()
            console.log('documento agregado!')
        }       
    
    
}


module.exports = crudMongo