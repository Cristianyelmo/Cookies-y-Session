const {check} = require('express-validator');


module.exports =   [
check('name')
.notEmpty().withMessage('El nombre es obligatorio').bail(),
check('email')
.notEmpty().withMessage('El email es obligatorio').bail()
.isEmail().withMessage('debe ser un email'),
check('edad')
.isNumeric().withMessage('Tiene que ser un numero').bail(),
check('color')
.notEmpty().withMessage('El color es obligatorio').bail(),


]