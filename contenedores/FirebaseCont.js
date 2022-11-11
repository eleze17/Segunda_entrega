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
    
    
    async  insertar(docu){
    const colecc = this.coleccion
    await colecc.doc().set(docu);
        console.log('documento insertado')
        };
    
    async selectOne (id){
        try{
            const docBuscado = await this.coleccion.doc(id).get();
           if(!docBuscado.exists) {
                throw new Error('No existe el id buscado')
            }else{
                const result = docBuscado.data;
                return {...result,id}
            }
        } catch(error){
            throw new Error(error)

        }    
    }
    async selectAll (){
        try{
            const todo = await this.coleccion.get();
            let docs = todo.docs;
            if (this.collecion =="productos"){
            const respuesta = docs.map((d)=>({
                id : d.id,
                nombre:d.nombre,
                categoria:d.categoria,
                precio:d.precio,
                stock:d.stock
            })
            )}else{
                const respuesta = docs.map((d)=>({
                    id : d.id,
                    usuarioCarrito:d.usuariocarrito,
                    productos:d.productos,
                    monto:d.monto,
                    time:d.time
                })

            )}
        
        } catch(error){
            throw new Error(error)

        }    
    }

    async update (id,dato){

        try{
        const doc = this.coleccion.doc(id).update(dato);
        console.log(doc)    

        }
        catch(error){
            throw new Error(error)

        }
    }
    async delete (id){
        
        try{
            const doc = this.coleccion.doc(id).delete();
            console.log(doc + ' eliminado')     
    
            }
            catch(error){
                throw new Error(error)
    
            }

    }


        
}
module.exports = firebase
        


