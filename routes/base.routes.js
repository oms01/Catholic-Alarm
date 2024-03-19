const express = require('express');
const router = express.Router();

const AuthMiddlewares = require('../middlewares/check-auth');


router.get('/', AuthMiddlewares.checkAuth, (req,res)=>{
    res.render('main',{
        userEmail : req.user.email,
        userId : req.user.id
    });
})

router.get('/manual', (req,res)=>{
    res.render('manual');
})

router.get('/401',(req,res)=>{
    res.status(401).render('errors/401');
})

router.get('/403',(req,res)=>{
    res.status(403).render('errors/403');
})

module.exports = router;