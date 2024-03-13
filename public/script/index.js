
firebase.initializeApp({
  apiKey: "AIzaSyAmuUAuGmDgRuhADZX6Wl4ba3xUX1L_uzU",
  projectId: "attention-b4db3",
  messagingSenderId: "652712696507",
  appId: "1:652712696507:web:c76fefdf8607edb7a7e79e",
})

const messaging = firebase.messaging()
let tok;

//서비스 워커 : 사용자가 브라우저를 꺼놓거나 다른 페이지 볼 경우 작동
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Service Worker 등록 성공:', registration);
    })
    .catch(function(err) {
      console.log('Service Worker 등록 실패:', err);
    });
}

//토큰 생성
messaging.requestPermission()
  .then(()=>{
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

//포그라운드 메시지 setting
messaging.onMessage((payload) => {
  const title = payload.data.title
  const options = {
      body: payload.data.body,
      icon: payload.data.icon
  }
  console.log(title+ " : " +options.body);
  if (Notification.permission === "granted") {
    const alarm = new Notification(title, options);
    alarm.onclick = ()=>{
      alarm.close();
      const link = payload.data.click_action;
      window.open(link);
    };
  }
});

//토큰 갱신
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

//백엔드로 토큰 전달
document.getElementById('form').addEventListener('submit', function() {
  document.getElementById('token').value = tok;
});