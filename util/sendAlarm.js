const User = require('../models/user.model');
const admin = require('firebase-admin');

async function sendAlarm(token, message){
    message.token = token;
    try{
        await admin.messaging().send(message);
        return 1;
    } catch(err){
        return 0;
    }
}

async function sendAlarmToAll(kind, data){
    const userList = await User.fetchUserWithKindEnabled(kind);
    const message = {
        data:{
            title: kind,
            body: data.title,
            click_action: data.link,
            icon: '/images/logo.jpg'
        },
        token: ''
    }
    let success = 0;
    let fail = 0;

    const send = userList[0].map(async (cur)=>{
        const ret = await sendAlarm(cur.token, message);
        ret ? success++ : fail++;
    });

    await Promise.all(send).then(()=>{
        console.log(`Total Success: ${success}, Total Fail: ${fail}`);
    })
}

module.exports={
    sendAlarmToAll: sendAlarmToAll,
    sendAlarm: sendAlarm
};