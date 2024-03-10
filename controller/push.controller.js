const send = require('../util/sendAlarm');
function pushTest(req,res){
    const data = {
        link: "www.naver.com",
        title: "test-title",
    }
    send.sendAlarm('general', data);
    res.redirect('/setting/'+req.user.id);
}

module.exports = {
    pushTest: pushTest
}