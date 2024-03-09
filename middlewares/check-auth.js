const jwt = require('jsonwebtoken');

//jwt 검증
function checkAuthStatus(req,res,next){
    try {
        if(req.cookies.CA===undefined){
            return res.redirect('/login');
        }
        const authToken = jwt.verify(req.cookies.CA, process.env.JWT_SECRET_KEY);
        req.decoded = authToken;
        return next()
    } catch (err){
        return res.send(err.message);
    }
}
function checkAdmin(req,res,next){
    try {
        if(req.cookies.CA===undefined){
            return res.redirect('/login');
        }
        const authToken = jwt.verify(req.cookies.CA, process.env.JWT_SECRET_KEY);
        if(!authToken.admin){
            return res.send("권한이 없습니다.");
        }
        return next()
    } catch (err){
        return res.send(err.message);
    }
}

module.exports={
    checkAuthStatus: checkAuthStatus,
    checkAdmin: checkAdmin
}