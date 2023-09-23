// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNpQF3JSW9_MvQLiUOv1KHnyL2LK7VT6k",
  authDomain: "chatapp-8ae46.firebaseapp.com",
  projectId: "chatapp-8ae46",
  storageBucket: "chatapp-8ae46.appspot.com",
  messagingSenderId: "663636023757",
  appId: "1:663636023757:web:471df502a39789e7f4cc84",
  measurementId: "G-9RG8RJ1D90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
