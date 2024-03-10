const User = require('../models/user.model');
const admin = require('firebase-admin');

async function sendAlarm(kind, data){
    const ret = await User.fetchUserWithKindEnabled(kind);
    const link = "https://www.naver.com";

    const message = {
        notification: {
            title: data.title,
            body: data.link,
        },
        data:{
            click_action: link
        },
        webpush: {
            fcm_options: {
              link: data.link
            },
        },
        token: ''
    }
    ret[0].forEach((cur)=>{
        message.token = cur.token;

        admin.messaging().send(message)
            .then((res)=>{
            console.log('Successfully sent message: : ', res)
            })
            .catch((err)=>{
                console.log('Error Sending message!!! token : ',cur.token);
            });
    });
}

module.exports={
    sendAlarm: sendAlarm,
};