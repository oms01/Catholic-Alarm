const send = require('../util/sendAlarm');

function pushTest(req,res){
    const data = {
        link: "https://www.naver.com",
        title: "test-title",
    }
    send.sendAlarm('general', data);
    res.redirect('/');
}

module.exports = {
    pushTest: pushTest
}