const express = require('express');
const router = express.Router();

const AdminController = require('../controller/admin.controller');

router.get('/', AdminController.getAdminPage);

router.get('/on', AdminController.startCrawling);

router.get('/off', AdminController.stopCrawling);

router.post('/createDummyUser', AdminController.createDummyUser);


module.exports = router;
