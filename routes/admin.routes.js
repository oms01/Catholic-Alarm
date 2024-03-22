const express = require('express');
const router = express.Router();

const AdminController = require('../controller/admin.controller');
const admin = require('firebase-admin');
const serviceAccount = require('../.firebase-admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

router.get('/', AdminController.getAdminPage);

router.get('/on', AdminController.startCrawling);

router.get('/off', AdminController.stopCrawling);

router.post('/createDummyUser', AdminController.createDummyUser);
  
router.post("/test", AdminController.test);


module.exports = router;
