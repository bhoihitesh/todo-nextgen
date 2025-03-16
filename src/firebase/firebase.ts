// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  //   apiKey: "AIzaSyBiwG-d35STYTrXpFPGMp2zTViX-DLa1ac",
  //   authDomain: "myapp-c5e6a.firebaseapp.com",
  //   projectId: "myapp-c5e6a",
  //   storageBucket: "myapp-c5e6a.firebasestorage.app",
  //   messagingSenderId: "854097604851",
  //   appId: "1:854097604851:web:dc1fd2742ce69480e00786",
  //   measurementId: "G-HLJVCVPLVE"
  // };
  
  // // Initialize Firebase
  // export const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  
  'use client'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmq0z5L3IxtIc1inplFJT424A-G8T-W3c",
  authDomain: "push-notification-6b8ee.firebaseapp.com",
  projectId: "push-notification-6b8ee",
  storageBucket: "push-notification-6b8ee.firebasestorage.app",
  messagingSenderId: "1028764316344",
  appId: "1:1028764316344:web:f623b9efe33e02a5e73a4d",
  measurementId: "G-C6NR543EYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
const analytics = getAnalytics(app);