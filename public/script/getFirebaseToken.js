
import { messaging } from './initFirebase.js';

//토큰 생성
messaging.requestPermission()
    .then(()=>{
        return messaging.getToken();
    })
    .then((token)=>{
        // console.log(token);
        document.querySelectorAll('form input#token').forEach((elem)=>{
            elem.value = token;
        });
        document.querySelectorAll('.btn.btn-warning').forEach((elem)=>{
            elem.disabled = false;
        })
    })
    .catch((err)=>{
        console.log("Error Occured");
        console.log(err);
    });

    
//백엔드로 토큰 전달
// document.getElementById('form').addEventListener('submit', ()=>{
//     document.getElementById('token').value = tok;
// });
// document.querySelectorAll('form').forEach(form => {
//     form.addEventListener('submit', () => {
//         form.querySelector('#token').value = tok;
//     });
// });
