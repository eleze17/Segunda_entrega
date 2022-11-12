require('dotenv').config()
const mongoose = require('mongoose')
const {productos} = require('../modelos/models.js')
const {carritos} = require('../modelos/models.js')



 class crudMongo{
    constructor(model){
        this.model = model
    }

    async  insertar(docu){
        await mongoose.connect(process.env.cadenaConex)
        console.log('mongo conectado')

        /*if (this.model = "productos"){
                const docNuevo =  new productos(docu)
                await docNuevo.save()   }
        else {
            const docNuevo = new  carritos(docu)
            await docNuevo.save()}
            */
            console.log('documento agregado!')
        }       
    
    
}


module.exports = crudMongo