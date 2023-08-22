

const noSession=(req,res,next)=>{
    if(!req.session.email){
        res.redirect('/admin')
    }
    next()
}

const yesSesssion=(req,res,next)=>{
    if(req.session.email){
        res.redirect('/admin/dashboard')
    }
    next()
}

const admin =(req,res)=>{
    res.render('adminLogin')
}

const dashboard=(req,res)=>{
    const email = 'kakashi@gmail.com'
    const password = '111'
    if(req.body.email===email && req.body.password===password){
        req.session.email=req.body.email
        res.cookie('email',req.session.email)
        res.redirect('/admin/dashboard')
        }else{
        console.log("wrong")
        res.send('Wrong')
    }
}

const adminLogout =(req,res)=>{
    req.session.destroy()
    res.clearCookie()
    res.redirect('/admin')
}

const adminDashboard = (req,res)=>{
    res.render('dashboard')
}
module.exports={
    admin,
    dashboard,
    adminDashboard,
    adminLogout,
    noSession,
    yesSesssion
}