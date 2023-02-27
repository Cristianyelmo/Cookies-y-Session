const {validationResult}=require('express-validator')

const Swal = require('sweetalert2')

module.exports = {

    index:(req, res, next)=> {
res.render('index')

    
 
 }
 
 
 
 
 
         
        
 
       ,
    
    color:(req, res, next)=> {

       const errors = validationResult(req)

       
       if(errors.isEmpty()){
        const {name,email,edad,color} = req.body


         req.session.Colores= {
           name,email,edad,color
            
        };
 
        return res.redirect('/')



} else{
    res.render('index',{
        errors:errors.mapped(),
        old:req.body
    } );

}





        
       

      }
}