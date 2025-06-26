// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ZoQHyRt8bSaEMWtcoZ2iMBDT4UTDcww",
  authDomain: "netflix-gpt-bce5d.firebaseapp.com",
  projectId: "netflix-gpt-bce5d",
  storageBucket: "netflix-gpt-bce5d.firebasestorage.app",
  messagingSenderId: "656615839321",
  appId: "1:656615839321:web:a11f2a201be1015f414348",
  measurementId: "G-ZF5CJ0DTN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();