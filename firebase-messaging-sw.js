/* Speak More! 알림 처리 파일 — index.html과 같은 곳에 올려 두세요. 수정할 필요 없어요. */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

const p = new URLSearchParams(self.location.search);
firebase.initializeApp({
  apiKey: p.get("apiKey"),
  projectId: p.get("projectId"),
  messagingSenderId: p.get("messagingSenderId"),
  appId: p.get("appId")
});
firebase.messaging();   // 앱이 닫혀 있을 때 온 알림을 휴대폰 상단에 표시
