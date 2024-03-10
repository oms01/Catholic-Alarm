const express = require('express');
const router = express.Router();

const admin = require('firebase-admin');
const serviceAccount = require('../.firebase-admin.json');
const pushController = require('../controller/push.controller');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post("/test",pushController.pushTest);



module.exports = router;