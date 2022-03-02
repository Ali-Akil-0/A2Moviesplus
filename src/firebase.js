// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOOIUr2wtu8nyxhpa6p7gUqrXhC10og-c",
  authDomain: "a2plus-2b1dc.firebaseapp.com",
  projectId: "a2plus-2b1dc",
  storageBucket: "a2plus-2b1dc.appspot.com",
  messagingSenderId: "367322787626",
  appId: "1:367322787626:web:d0dd458a45f664bda4f853",
  measurementId: "G-1KPMNH2XPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
