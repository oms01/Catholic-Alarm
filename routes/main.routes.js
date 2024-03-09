const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('main');
});

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/user/:id', (req,res)=>{

});


module.exports = router;
