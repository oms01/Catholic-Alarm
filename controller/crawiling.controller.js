const crawling = require('../util/crawling');

function startCrawling(req,res){
    if(crawling.state.isMonitoring){
        res.json({messge: 'Program is already running'});
        return;
    }
    crawling.state.isMonitoring = true;
    crawling.run();
    res.json({messge: 'Program is running'});
}

function stopCrawling(req,res){
    crawling.state.isMonitoring = false;
    res.json({messge: 'Program stop'});
}

module.exports = {
    startCrawling: startCrawling,
    stopCrawling: stopCrawling
}