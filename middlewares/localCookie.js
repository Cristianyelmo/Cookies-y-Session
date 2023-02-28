module.exports = (req,res,next)=>{

    
    if(req.cookies.UserColores){
        req.session.Colores = req.cookies.UserColores
    }

    next()






}