const express = require('express')
const userRouter = express()
const userController= require('../controller/userController')

userRouter.set('views','views/userLogin')

userRouter.get('/',userController.yesSesssion,userController.loginpage)
userRouter.get('/home',userController.noSession,userController.home)

userRouter.post('/userlogin',userController.userloginForm)
userRouter.post('/logout',userController.logout)
// userRouter.get('/welcome',userController.welcome)

module.exports=userRouter