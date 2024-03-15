
document.addEventListener('DOMContentLoaded', () => {
    if (!("Notification" in window)) {
        alert("이 브라우저는 웹 알림을 지원하지 않습니다.");
    } 
    else {
        Notification.requestPermission();
    };
});