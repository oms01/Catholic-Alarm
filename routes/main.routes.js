const express = require('express');

const router = express.Router();
const CrawlingController = require('../controller/crawiling.controller');

router.get('/',(req,res)=>{
    res.render('main');
});

router.get('/on', CrawlingController.startCrawling);

router.get('/off', CrawlingController.stopCrawling);


module.exports = router;
