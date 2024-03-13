const User = require('../models/user.model');
const admin = require('firebase-admin');

async function sendAlarm(kind, data){
    const userList = await User.fetchUserWithKindEnabled(kind);
    const message = {
        data:{
            title: kind,
            body: data.title,
            click_action: data.link,
            icon: '/images/sad.jpg'
        },
        token: ''
    }
    userList[0].forEach((cur)=>{
        message.token = cur.token;
        admin.messaging().send(message)
            .then((res)=>{
                console.log('Successfully sent message: : ', res)
            })
            .catch((err)=>{
                console.log('Error Sending message!!! token : ',err);
            });
    });
}

module.exports={
    sendAlarm: sendAlarm,
};