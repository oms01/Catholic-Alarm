const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport');
const User = require('../models/user.model');

passport.use('kakao', new KakaoStrategy(
    {
        clientID: process.env.KAKAO_RESTAPI_KEY,
        callbackURL: '/login/kakao/callback',
    },
    async (accessToken, refreshToken, profile, done) => {        
        const email = profile._json.kakao_account.email;//로그인한 사용자 email
        try{
            const user = await User.findByEmail(email);
            let id, admin=0;
            if(user===undefined){ //가입 필요
                const newUser = new User(email);
                id = await newUser.signUp();
            }
            else{
                id = user.id;
                admin = user.admin;
            }
            done(null, {email: email, id: id, admin: admin});
        }catch(error){
            console.log(error);
        }
    }
));

module.exports = passport;