// /lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBixa41ebu3FDs-MMooDa-TBw1xhNW8Oy8",
  authDomain: "journel-c6f6e.firebaseapp.com",
  projectId: "journel-c6f6e",
  storageBucket: "journel-c6f6e.appspot.com", // fixed typo: use `.appspot.com`
  messagingSenderId: "493978510662",
  appId: "1:493978510662:web:21d3c6343bdd654c873147",
  measurementId: "G-1P7VG6G8NM",
};

// Avoid duplicate initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Only run analytics in browser
if (typeof window !== "undefined") {
  getAnalytics(app);
}

//Export Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
