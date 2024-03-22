const jwt = require('jsonwebtoken');

//로그인 검증
function checkAuth(req,res,next){
    try {
        if(req.cookies.CA===undefined){
            return res.redirect('/login');
        }
        const authToken = jwt.verify(req.cookies.CA, process.env.JWT_SECRET_KEY);
        req.user = authToken;
        return next()
    } catch (err){
        return res.redirect('/401');
    }
}
//관리자 검증
function checkAdmin(req,res,next){
    try {
        if(req.cookies.CA===undefined){
            return res.redirect('/login');
        }
        const authToken = jwt.verify(req.cookies.CA, process.env.JWT_SECRET_KEY);
        if(!authToken.admin){
            return res.redirect('/401');
        }
        return next()
    } catch (err){
        return res.redirect('/404');
    }
}

module.exports={
    checkAuth: checkAuth,
    checkAdmin: checkAdmin
}