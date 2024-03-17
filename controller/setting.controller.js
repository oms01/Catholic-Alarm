const User = require('../models/user.model');
const send = require('../util/sendAlarm');

async function getUserPage(req,res){
    const user = await User.getSetting(req.user.id);
    res.render('setting',{
        userEmail: req.user.email,
        submitPath: '/setting/'+ req.user.id,
        general: user.general,
        academic: user.academic,
        scholarship: user.scholarship,
        entrepreneurship: user.entrepreneurship
    });
}

async function updateUserSetting(req,res){
    const general = req.body.general=='on' || 0;
    const academic = req.body.academic=='on' || 0;
    const scholarship = req.body.scholarship=='on' || 0;
    const entrepreneurship = req.body.entrepreneurship=='on' || 0;
    await User.updateSetting(req.user.id, req.body.token, general, academic, scholarship, entrepreneurship);

    const message = {
        data:{
            title: 'Catholic Alarm',
            body: '설정이 저장되었습니다!',
            click_action: '',
            icon: '/images/logo.jpg'
        },
        token: ''
    }
    send.sendAlarm(req.body.token, message);

    res.redirect('/');
}

module.exports = {
    getUserPage: getUserPage,
    updateUserSetting: updateUserSetting
}