// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9nnOoUfOpL3Gj3pk6b9xMBNRyEOZNto4",
  authDomain: "formauthntication.firebaseapp.com",
  projectId: "formauthntication",
  storageBucket: "formauthntication.appspot.com",
  messagingSenderId: "136390785031",
  appId: "1:136390785031:web:2756af27ecb4aff15bd2a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;