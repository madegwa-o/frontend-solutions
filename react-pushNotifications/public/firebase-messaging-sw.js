// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase in the Service Worker
firebase.initializeApp({
    apiKey: "AIzaSyD3BaFcK5t4lV6w25vmeyPkNE2DfVz2X7o",
    authDomain: "karu-exchange-messaging.firebaseapp.com",
    projectId: "karu-exchange-messaging",
    storageBucket: "karu-exchange-messaging.firebasestorage.app",
    messagingSenderId: "973906062137",
    appId: "1:973906062137:web:ed4870c112b474291716e8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(' drill Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.svg', // Replace with your app's icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
