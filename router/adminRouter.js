const express = require('express')
const adminRouter = express()
const adminController = require('../controller/adminController')

adminRouter.set('views','views/adminLogin')


adminRouter.get('/',adminController.yesSesssion,adminController.admin)
adminRouter.get('/dashboard',adminController.noSession,adminController.adminDashboard)

adminRouter.post('/adminlogin',adminController.dashboard)
adminRouter.post('/logout',adminController.adminLogout)

module.exports=adminRouter