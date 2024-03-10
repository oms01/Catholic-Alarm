const jwt = require('jsonwebtoken');

function getLoginPage(req,res){
    res.render('login');
}

async function updateJWT(req,res){
    const userData = {
        id : req.user.id,
        email : req.user.email,
        admin : req.user.admin
    };
    res.cookie("CA", jwt.sign(userData,process.env.JWT_SECRET_KEY));
    res.redirect('/');
};

module.exports = {
    getLoginPage: getLoginPage,
    updateJWT: updateJWT
}