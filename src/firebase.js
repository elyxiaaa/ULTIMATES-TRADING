// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC6vDSgi6gQ3-HTn7UWmK7iPWE6yAR2UNc",
  authDomain: "ultimates-construction-1dfac.firebaseapp.com",
  projectId: "ultimates-construction-1dfac",
  storageBucket: "ultimates-construction-1dfac.appspot.com", // ✅ fixed
  messagingSenderId: "304534640058",
  appId: "1:304534640058:web:a6f70fc07ce69495bd3983",
  measurementId: "G-43K222N8W9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ initialize Firestore
const provider = new GoogleAuthProvider();

export { auth, db, provider, signInWithPopup, signOut };
