const express = require('express');
const router = express.Router();

const kakaoPassport = require('../config/kakaoConfig');
const authController = require('../controller/auth.controller');

router.get('/',authController.getLoginPage);

router.get('/kakao',kakaoPassport.authenticate('kakao',{session:false})); 

router.get('/kakao/callback', kakaoPassport.authenticate('kakao',{session:false}), authController.updateJWT);

router.post('/logout', authController.logout);

module.exports = router;