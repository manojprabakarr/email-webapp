const express=require ('express');
const {Registercontroller } = require('../controllers/usercontroller');
const router=express.Router()


router.post('/login',Registercontroller);


module.exports=router