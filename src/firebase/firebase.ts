'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, isSupported } from "firebase/messaging";
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

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);
// const analytics = getAnalytics(app);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize analytics only in the browser
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize messaging only if the browser supports it
export let messaging: ReturnType<typeof getMessaging> | null = null;

const initMessaging = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    messaging = getMessaging(app);
  }
};

// Call the function to initialize messaging
initMessaging();