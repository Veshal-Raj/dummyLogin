const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dummyData')
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((error)=>{
    console.error(error);
})

//     Cache
app.use((req,res,next)=>{
    res.set('Cache-control',
    'no-store, no-cache');
    next()    
})

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}))

app.use(cookieParser())

app.set('view engine','ejs')

const userRouter = require("./router/userRouter")
app.use('/',userRouter)

const adminRouter = require('./router/adminRouter')
app.use('/admin',adminRouter)

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})