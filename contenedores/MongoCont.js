require('dotenv').config()
const mongoose = require('mongoose')
const {productos} = require('../modelos/models.js')
const {carritos} = require('../modelos/models.js')



 class crudMongo{
    constructor(model){
        this.model = model
    }

    async  insertar(docu){

        try { 
            
            const connection = await mongoose.connect(process.env.cadenaConex, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            
                     
                
                if (this.model = "productos"){
                console.log('mongo conectado')
                    const docNuevo =  new productos(docu)
                    await docNuevo.save()   }
                 else {
                console.log('mongo conectado')
                    const docNuevo = new  carritos(docu)
                    await docNuevo.save()}
            
            console.log('documento agregado!')
        }  catch(error){(console.log(error))  }   
    
    
}

}
module.exports = crudMongo