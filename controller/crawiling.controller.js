const crawling = require('../util/crawling');

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

module.exports = {
    startCrawling: startCrawling,
    stopCrawling: stopCrawling
}