
firebase.initializeApp({
  apiKey: "AIzaSyAmuUAuGmDgRuhADZX6Wl4ba3xUX1L_uzU",
  projectId: "attention-b4db3",
  messagingSenderId: "652712696507",
  appId: "1:652712696507:web:c76fefdf8607edb7a7e79e",
})

const messaging = firebase.messaging()

messaging.requestPermission()
  .then(()=>{
    console.log("Have Permission");
    return messaging.getToken();
  })
  .then((token)=>{
    console.log(token);
  })
  .catch((err)=>{
    console.log("Error Occured");
    console.log(err);
  });

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    setTokenSentToServer(false);
    sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});
