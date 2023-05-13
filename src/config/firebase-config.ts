// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCJzK0usfIQL-tzcDH1r6hmX5lsnn4AgWI",
  authDomain: "easmobile-aa24d.firebaseapp.com",
  projectId: "easmobile-aa24d",
  storageBucket: "easmobile-aa24d.appspot.com",
  messagingSenderId: "908085426233",
  appId: "1:908085426233:web:431911995301d09fffb5e8",
  measurementId: "G-NG0R86MY7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
