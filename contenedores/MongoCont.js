require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.cadenaConex)
console.log('mongoatlas conectado')

 class crudMongo{
    constructor(model){
        this.model = model
    }

    async  insertar(docu){
    const docNuevo =  new this.model(docu)
    await docNuevo.save()
    console.log('documento agregado!')
}







}

module.exports = crudMongo