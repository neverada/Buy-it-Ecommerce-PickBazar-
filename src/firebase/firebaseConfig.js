
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqBMB1E7mZZ9-dB6WScDZVceu75XWXHnM",
  authDomain: "buy-it-3a1bb.firebaseapp.com",
  projectId: "buy-it-3a1bb",
  storageBucket: "buy-it-3a1bb.firebasestorage.app",
  messagingSenderId: "929464569385",
  appId: "1:929464569385:web:df11aa7d1a833351ced638",
  measurementId: "G-YH8VKLZ8TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;