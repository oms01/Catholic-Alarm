const User = require('../models/user.model');
const send = require('../util/sendAlarm');

async function getUserPage(req,res){
    let user;
    try{
        user = await User.getSetting(req.user.id);
    } catch(err){
        return res.redirect('400',{errorMessage: "DataBase Access Fail"});
    }
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
    if(req.body.token===''){
        return res.redirect('400',{errorMessage:"Token Issuance Error"});
    }
    try{
        await User.updateSetting(req.user.id, req.body.token, general, academic, scholarship, entrepreneurship);
    } catch(err){
        return res.redirect('400',{errorMessage: "DataBase Access Fail"});
    }

    const message = {
        data:{
            title: 'Catholic Alarm',
            body: '설정이 저장되었습니다!',
            click_action: '',
            icon: '/images/logo.jpg'
        },
        token: ''
    }
    try{
        send.sendAlarm(req.body.token, message);
    } catch(err){
        return res.redirect('400',{errorMessage: "Message Sending Fail"});
    }
    res.redirect('/');
}

async function sendTestAlarm(req,res){
    try{
        const message = {
            data:{
                title: '테스트 알림입니다.',
                body: 'test',
                click_action: '',
                icon: '/images/logo.jpg'
            },
            token: ''
        }
        send.sendAlarm(req.body.token, message);
    } catch(err){
        return res.redirect('400', {errorMessage: "Message Sending Fail"});
    }
    res.redirect('/setting/'+req.user.id);
}

module.exports = {
    getUserPage: getUserPage,
    updateUserSetting: updateUserSetting,
    sendTestAlarm: sendTestAlarm
}