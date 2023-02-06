import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC786rdCKiObpk5-kpA35hCOtsoXJwC2eY",
  authDomain: "netfilx-clo.firebaseapp.com",
  projectId: "netfilx-clo",
  storageBucket: "netfilx-clo.appspot.com",
  messagingSenderId: "165292219372",
  appId: "1:165292219372:web:ab446bfc674c925ca23ec9",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

