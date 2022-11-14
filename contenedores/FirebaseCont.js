const admin = require ("firebase-admin");
const serviceAccount = require("../productos-3cb5d-firebase-adminsdk-sqy89-b83d20ba4b.json") ;


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
console.log('base conectada')
   
class firebase   {
    constructor(coleccion){
        this.coleccion = db.collection(coleccion)
        }
    
    
    async  insertar(docu,res){
    const colecc = this.coleccion
    const ins = await colecc.doc().set(docu);
        console.log('documento insertado')
        res.send(ins)

    
    };
    
    async selectOne (id,res){
        try{
            const docBuscado = await this.coleccion.doc(id).get();
          
           if(!docBuscado.exists) {
                throw new Error('No existe el id buscado')
              
            }else{
                const result = docBuscado.data();
               res.send(result)
                //return {...result,id}
               
            }
        } catch(error){
            throw new Error(error)

        }    
    }
    async selectAll (){
        try{
           // console.log(this.coleccion._queryOptions.collectionId)
            const todo = await this.coleccion.get();
            let docs = todo.docs;
            if (this.coleccion._queryOptions.collectionId =="productos"){
             let doc = docs.map((d)=>(console.log(d) ,{
                
                id : d.id,
                categoria:d.data().categoria,
                nombre:d.data().nombre,
                precio:d.data().precio,
                stock:d.data().stock}
                
                )
            
            )   ; console.log(doc)
        } 
        else{
                const doc = docs.map((d)=>({
                    id : d.id,
                    usuarioCarrito:d.data().usuariocarrito,
                    productos:d.data().productos,
                    monto:d.data().monto,
                    time:d.data().time
                })
             
            );
            //console.log(doc)
        }
           
        
        } catch(error){
            throw new Error(error)

        }    
    }

    async update (id,dato,res){

        try{
        let campo = dato.dato    
        const doc = await this.coleccion.doc(id).update(campo);
        res.send('Doc_Actualizado')    

        }
        catch(error){
            throw new Error(error)

        }
    }
    async delete (id,res){
        
        try{
             const doc = await this.coleccion.doc(id).delete();
            res.send('documento eliminado')     
    
            }
            catch(error){
                throw new Error(error)
    
            }

    }


        
}
module.exports = firebase
        


