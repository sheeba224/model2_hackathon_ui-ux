// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJdjc3lxEmOgkYoF13hc1MWH_HqkunrWY",
  authDomain: "my-first-project-d8e81.firebaseapp.com",
  projectId: "my-first-project-d8e81",
  storageBucket: "my-first-project-d8e81.firebasestorage.app",
  messagingSenderId: "193078634586",
  appId: "1:193078634586:web:6fa5c1520d7f7434a85063",
  measurementId: "G-T5Z8E72TJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);