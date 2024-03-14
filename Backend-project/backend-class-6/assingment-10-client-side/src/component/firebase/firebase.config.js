// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMttZTOJj4tbJ9l8L_P54b4aY9kMtQJfo",
  authDomain: "brandshop-6930e.firebaseapp.com",
  projectId: "brandshop-6930e",
  storageBucket: "brandshop-6930e.appspot.com",
  messagingSenderId: "193586460384",
  appId: "1:193586460384:web:bc2d805b77e5f6fd4b8285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);