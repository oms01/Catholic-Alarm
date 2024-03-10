const express = require('express');
const router = express.Router();

const AuthMiddlewares = require('../middlewares/check-auth');


router.get('/', AuthMiddlewares.checkAuth, function(req,res){
    res.render('main',{
        userEmail : req.user.email,
        userId : req.user.id
    });
})

router.get('/401',function(req,res){
    res.status(401).render('shared/401');
})

router.get('/403',function(req,res){
    res.status(403).render('shared/403');
})

module.exports = router;