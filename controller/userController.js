
const noSession=(req,res,next)=>{
    if(!req.session.email){
        return res.redirect('/')   
    }
    
    return next()
}

const yesSesssion =(req,res,next)=>{
    if(req.session.email){
      return  res.redirect('/home')
    }
    return next()
}

const welcome = (req,res)=>{
    res.send('Welcome User')
}

const loginpage =(req,res)=>{
    res.render('userlogin')
}

const userloginForm = (req,res)=>{
    const email= 'Jhon@gmail.com'
    const password='111'
    if(req.body.email === email && req.body.password ===password){
        req.session.email=req.body.email
        res.cookie("email",req.session.email)
        console.log(res.cookie)
        console.log(req.session)
        // res.send('Success')
        res.redirect('/home')
    }else{
        res.send('error')
        console.log("wrong")
    }
}

const logout= (req,res)=>{
    req.session.destroy()
    res.clearCookie("email")
    res.redirect('/')
}

const home= (req,res)=>{
    res.render('home')
}

module.exports={
    logout,
    welcome,
    loginpage,
    userloginForm,
    yesSesssion,
    noSession,
    home
}