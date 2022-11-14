const validarBase = (req, res, next) => {
    console.log(req.body)
    let base = req.body.base
    console.log(base)
    if(base=='mongo' || base=='firebase' ){
            req.base = base
            next()
        }else{
            console.log('Debe indicar que base usar Mongo o Firebase')
            res.status(400).json({ messaje: 'Indicar base (mongo o firebase)'})
   
                }

}
module.exports = validarBase