importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAmuUAuGmDgRuhADZX6Wl4ba3xUX1L_uzU",
  projectId: "attention-b4db3",
  messagingSenderId: "652712696507",
  appId: "1:652712696507:web:c76fefdf8607edb7a7e79e",
});
 
const messaging = firebase.messaging();

//백그라운드에서 알람 설정
messaging.onBackgroundMessage((payload)=>{
  console.log('[firebase-messaging-sw.js] onBackgroundMessage ', payload)
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.', event);
    const targetUrl = payload.data.click_action;
    event.waitUntil(clients.openWindow(targetUrl));
    console.log("open");
    event.notification.close();
});
});
