// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvRAusPtUpPg5u4JdqKeG0_9rpTtaVn0",
  authDomain: "donation-37e2f.firebaseapp.com",
  projectId: "donation-37e2f",
  storageBucket: "donation-37e2f.appspot.com",
  messagingSenderId: "906013887120",
  appId: "1:906013887120:web:8822b65516c3b5ab32a615",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)