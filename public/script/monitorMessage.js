
import {messaging} from './initFirebase.js';

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
