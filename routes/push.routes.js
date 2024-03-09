const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const serviceAccount = require('../.firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post('/',(req,res)=>{
  
  res.redirect('/test');
});

router.get("/test",(req,res)=>{
  let deviceToken =`egEyVSqOp48BytNctIuxRG:APA91bFUpvsyeubE24uRGedQtJIqr8dIp2QFZrQtvS8OWAAq6HWK7yCwDT6imZ5nWOS2yZBi_QSK2MEH4kYJ8CiYhYDGy0fiWm2eHhS6vzfCm76pmcwzxlH1FDaFjLuIaNqZ8RgYvrA5`;

  let message = {
    notification: {
      title: 'test-title',
      body: 'test-body',
    },
    token: deviceToken,
  }

  admin
    .messaging()
    .send(message)
    .then(function (response) {
      console.log('Successfully sent message: : ', response)
      return res.status(200).json({success : true})
    })
    .catch(function (err) {
        console.log('Error Sending message!!! : ', err)
        return res.status(400).json({success : false})
    });

});


module.exports = router;