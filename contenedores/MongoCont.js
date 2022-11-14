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

    async  insertar(docu,res){

        try { 
            
         this.conectar()
            
                     
                
                if (this.model == "productos"){
                console.log('mongo conectado')
                    const docNuevo =  new productos(docu)
                    await docNuevo.save() 
                   }
                 else {
                console.log('mongo conectado')
                    const docNuevo = new  carritos(docu)
                    await docNuevo.save()
                  
                }
            
            console.log('documento agregado!')
        }  catch(error){(console.log(error))  }   
    
    
}


async  eliminar(dato,res){

    try { 
        
     this.conectar()
        
                 
            
            if (this.model == "productos"){
            console.log('mongo conectado')
            let filtro = {"id":dato}
            let del = await productos.deleteMany(filtro) 
            res.send('documento borrado!')
      
             }
             else {
            console.log('mongo conectado')
            let filtro = {"id":dato}
            let del = await carritos.deleteMany(filtro)  
            res.send('documento borrado!')
     

        }
        
    }  catch(error){(console.log(error))  }   


}



async  actualizar(dato,nuevovalor,res){

    try { 
        
     this.conectar()
        
                 
            
            if (this.model == "productos"){
            console.log('mongo conectado')
            let filtro = {"id":dato}
            let campo = nuevovalor.dato
            console.log(campo)
            let upd = await productos.updateMany(filtro,{$set: campo }) 
            res.send('documento actualizado!')
      
             }
             else {
            console.log('mongo conectado')
            let filtro = {"id":dato}
            let campo = nuevovalor.dato
            let upd = await carritos.updateMany(filtro,{$set: campo }) 
            res.send('documento actualizado!')
      

        }
        
    }  catch(error){(console.log(error))  }   

}
    async leer (dato,res){

        try { 
            
         this.conectar()
            
                     
                
                if (this.model == "productos"){
                console.log('mongo conectado')
                let buscado = await productos.find({id:dato}) 
                console.log('documento buscado!' + buscado)
                res.send(buscado)
          
                 }
                 else {
                console.log('mongo conectado')
                let buscado = await carritos.find(dato) 
                console.log('documento buscado!' + buscado)
                res.send(buscado)
             
    
            }
            
        }  catch(error){(console.log(error))  }   
    
    
    }
    










}
module.exports = crudMongo