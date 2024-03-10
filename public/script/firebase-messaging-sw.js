importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAmuUAuGmDgRuhADZX6Wl4ba3xUX1L_uzU",
  projectId: "attention-b4db3",
  messagingSenderId: "652712696507",
  appId: "1:652712696507:web:c76fefdf8607edb7a7e79e",
});
 
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
    console.log('[firebase-messaging-sw.js] onBackgroundMessage ', payload)
})