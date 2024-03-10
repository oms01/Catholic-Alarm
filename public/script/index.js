
firebase.initializeApp({
  apiKey: "AIzaSyAmuUAuGmDgRuhADZX6Wl4ba3xUX1L_uzU",
  projectId: "attention-b4db3",
  messagingSenderId: "652712696507",
  appId: "1:652712696507:web:c76fefdf8607edb7a7e79e",
})

const messaging = firebase.messaging()
let tok;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/script/firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Service Worker 등록 성공:', registration);
    })
    .catch(function(err) {
      console.log('Service Worker 등록 실패:', err);
    });
}

messaging.requestPermission()
  .then(()=>{
    console.log("Have Permission");
    return messaging.getToken();
  })
  .then((token)=>{
    console.log(token);
    tok=token;
  })
  .catch((err)=>{
    console.log("Error Occured");
    console.log(err);
  });

messaging.onMessage((payload) => {
  const title = payload.notification.title
  const options = {
      body: payload.notification.body,
      icon: payload.notification.icon
  }
  // console.log(payload.notification.click_action);
  console.log(title+ " : " +options.body);
  if (Notification.permission === "granted") {
    new Notification(title, options);
  }
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    setTokenSentToServer(false);
    sendTokenToServer(refreshedToken);
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});

document.getElementById('form').addEventListener('submit', function() {
  document.getElementById('token').value = tok;
});