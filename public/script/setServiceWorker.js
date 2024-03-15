if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Service Worker 등록 성공:', registration);
      })
      .catch(function(err) {
        console.log('Service Worker 등록 실패:', err);
      });
}