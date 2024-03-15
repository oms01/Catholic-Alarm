
import { messaging } from './initFirebase.js';

let tok;
//토큰 생성
messaging.requestPermission()
    .then(()=>{
        return messaging.getToken();
    })
    .then((token)=>{
        // console.log(token);
        tok=token;
    })
    .catch((err)=>{
        console.log("Error Occured");
        // console.log(err);
    });

    
//백엔드로 토큰 전달
document.getElementById('form').addEventListener('submit', ()=>{
    document.getElementById('token').value = tok;
});