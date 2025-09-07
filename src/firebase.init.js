// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1exkcjrrjDOZ-TdFsARGMxXSLIauFhnk",
  authDomain: "aiub-sports.firebaseapp.com",
  projectId: "aiub-sports",
  storageBucket: "aiub-sports.firebasestorage.app",
  messagingSenderId: "105839700187",
  appId: "1:105839700187:web:d0fbe7c7a70c660b8304fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;