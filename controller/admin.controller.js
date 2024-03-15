const crawling = require('../util/crawling');
const send = require('../util/sendAlarm');

function getAdminPage(req,res){
    res.render('admin');
}

function startCrawling(req,res){
    if(crawling.state.isMonitoring){
        console.log('Program is already running');
        res.redirect('/admin');
        return;
    }
    crawling.state.isMonitoring = true;
    crawling.run();
    console.log('Program is running');
    res.redirect('/admin');
}

function stopCrawling(req,res){
    if(!crawling.state.isMonitoring){
        console.log('Program is already stoped');
        res.redirect('/admin');
        return;
    }
    crawling.state.isMonitoring = false;
    console.log('Program is Stoped');
    res.redirect('/admin');
}

async function createDummyUser(req,res){
    const email = "test@test.com";
    const newUser = new User(email);
    id = await newUser.signUp();
    console.log(id);
    res.json({
        "status": "success"
    });
}

function pushTest(req,res){
    const data = {
        link: "https://www.naver.com",
        title: "test-title",
    }
    send.sendAlarm('general', data);
    res.redirect('/admin');
}

module.exports = {
    getAdminPage: getAdminPage,
    startCrawling: startCrawling,
    stopCrawling: stopCrawling,
    createDummyUser: createDummyUser,
    pushTest: pushTest
}