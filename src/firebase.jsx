import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();