const express = require('express');
const router = express.Router();

const AuthMiddlewares = require('../middlewares/check-auth');
const {getLog} = require('../util/log');


router.get('/', AuthMiddlewares.checkAuth, async (req,res)=>{
    const data = await getLog();
    res.render('main',{
        userEmail : req.user.email,
        userId : req.user.id,
        contents : data.reverse(),
        admin : req.user.admin
    });
})

router.get('/manual', (req,res)=>{
    res.render('manual');
})

router.get('/400',(req,res)=>{
    res.status(400).render('errors/400');
})

router.get('/401',(req,res)=>{
    res.status(401).render('errors/401');
})

router.get('/403',(req,res)=>{
    res.status(403).render('errors/403');
})

module.exports = router;