// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "thakur-agritools-hub",
  "appId": "1:922726785846:web:05e1acac0328c099ed0997",
  "storageBucket": "thakur-agritools-hub.firebasestorage.app",
  "apiKey": "AIzaSyACeZFxrBCX83nin2dmucsDgv1-QDOXQuU",
  "authDomain": "thakur-agritools-hub.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "922726785846"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
