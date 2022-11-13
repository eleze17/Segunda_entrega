require('dotenv').config()
const mongoose = require('mongoose')
const {productos} = require('../modelos/models.js')
const {carritos} = require('../modelos/models.js')



 class crudMongo{
    constructor(model){
        this.model = model
    }

        async conectar() { const connection = await mongoose.connect(process.env.cadenaConex, {
        useNewUrlParser: true,
        useUnifiedTopology: true })
        }

    async  insertar(docu){

        try { 
            
         this.conectar()
            
                     
                
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


async  eliminar(dato){

    try { 
        
     this.conectar()
        
                 
            
            if (this.model = "productos"){
            console.log('mongo conectado')
            let del = await productos.deleteMany(dato) 
            console.log('documento borrado!')
      
             }
             else {
            console.log('mongo conectado')
            let del = await carritos.deleteMany(dato)  
            console.log('documento borrado!')
     

        }
        
    }  catch(error){(console.log(error))  }   


}



async  actualizar(dato,nuevovalor){

    try { 
        
     this.conectar()
        
                 
            
            if (this.model = "productos"){
            console.log('mongo conectado')
            let upd = await productos.updateMany(dato,{$set: nuevovalor }) 
            console.log('documento actualizado!')
      
             }
             else {
            console.log('mongo conectado')
            let upd = await carritos.updateMany(dato,{$set: nuevovalor }) 
            console.log('documento actualizado!')
      

        }
        
    }  catch(error){(console.log(error))  }   

}
    async leer (dato){

        try { 
            
         this.conectar()
            
                     
                
                if (this.model = "productos"){
                console.log('mongo conectado')
                let buscado = await productos.find(dato) 
                console.log('documento buscado!' + buscado)
          
                 }
                 else {
                console.log('mongo conectado')
                let upd = await carritos.find(dato) 
                console.log('documento buscado!' + buscado)
          
    
            }
            
        }  catch(error){(console.log(error))  }   
    
    
    }
    










}
module.exports = crudMongo