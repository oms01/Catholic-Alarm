
document.addEventListener('DOMContentLoaded', async () => {
    if (!("Notification" in window)) {
        alert("이 브라우저는 웹 알림을 지원하지 않습니다.");
    } 
    else {
        Notification.requestPermission(permission=>{
            if(permission=="denied"){
                alert("알람 권한을 허용해주세요!");
            }
        });
    };
});