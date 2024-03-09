const express = require('express');

const router = express.Router();
const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
require("dotenv").config()

const query = require('./auth.sql');
const db = require('../data/database');

passport.use('kakao', new KakaoStrategy(
    {
        clientID: process.env.KAKAO_RESTAPI_KEY,
        callbackURL: '/kakao/callback',
    },
    async (accessToken, refreshToken, profile, done) => {        
        const email = profile._json.kakao_account.email;//로그인한 사용자 email
        // const id = profile._json.id; //카카오에서 설정된 id
        try{
            const user = await db.query(query.findUserByEmail, email);
            let id;
            if(user[0].length===0){ //가입
                await db.query(query.userRegister, [email,new Date(), new Date(), 1,0]);
                const tmp = await db.query(query.findUserByEmail, email);
                id = user[0][0].id;
                await db.query(query.userSetting, [tmp[0][0].id, 0,0,0,0,0]);
            }
            id = user[0][0].id;
            done(null, {email: email, id: id, accessToken: accessToken});
        }catch(error){
            console.log(error);
        }
    }
));

router.get('/kakao',passport.authenticate('kakao',{session:false})); 

router.get('/kakao/callback', passport.authenticate('kakao',{session:false}), async (req,res) => {
    const user = await db.query(query.findUserByEmail, req.user.email);
    const userData = {
        id : req.user.id,
        email : req.user.email,
        admin : user[0][0].admin
    };
    res.cookie("CA", jwt.sign(userData,process.env.JWT_SECRET_KEY));
    res.redirect('/');
});


router.get('/login',(req,res)=>{
    res.render('login');
})



module.exports = router;