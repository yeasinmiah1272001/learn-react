// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDttcEdt-W-S84pUNxvA2WzMQMqeJBMlLU",
  authDomain: "doctor-5d6b8.firebaseapp.com",
  projectId: "doctor-5d6b8",
  storageBucket: "doctor-5d6b8.appspot.com",
  messagingSenderId: "640061942241",
  appId: "1:640061942241:web:698f46c647d61213438aa0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;