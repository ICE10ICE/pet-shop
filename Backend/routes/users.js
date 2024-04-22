const express=require('express')

//cotroller functions
const {signupUser,loginUser}=require('../Controllers/userController')

const router= express.Router()
//login Routes
router.post('/login',loginUser)


//signup routes
router.post('/signup',signupUser)

module.exports=router