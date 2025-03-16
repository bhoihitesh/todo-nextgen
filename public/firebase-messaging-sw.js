importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCmq0z5L3IxtIc1inplFJT424A-G8T-W3c",
    authDomain: "push-notification-6b8ee.firebaseapp.com",
    projectId: "push-notification-6b8ee",
    storageBucket: "push-notification-6b8ee.firebasestorage.app",
    messagingSenderId: "1028764316344",
    appId: "1:1028764316344:web:f623b9efe33e02a5e73a4d",
    measurementId: "G-C6NR543EYW"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Update with your icon
  });
});