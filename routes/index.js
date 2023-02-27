var express = require('express');
var router = express.Router();


const validator = require('../validatores/loginvalidator')
/* GET home page. */

const {color,index} = require('../controllers/colorcontroller')



router.get('/',index)
router.post('/',validator,color)

module.exports = router;
