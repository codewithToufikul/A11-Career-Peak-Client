import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWmRd-p1yrUMZFLoQFIWu6hAqmq2Q3Z4",
  authDomain: "career-peak.firebaseapp.com",
  projectId: "career-peak",
  storageBucket: "career-peak.appspot.com",
  messagingSenderId: "10493974651",
  appId: "1:10493974651:web:5e603986b95936a8c7eade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);