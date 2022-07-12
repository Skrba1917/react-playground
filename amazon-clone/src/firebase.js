import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7dPiyx0NY26LV1RjJbVcjY-bItwLf6JA",
  authDomain: "clone-8bb89.firebaseapp.com",
  projectId: "clone-8bb89",
  storageBucket: "clone-8bb89.appspot.com",
  messagingSenderId: "616996647770",
  appId: "1:616996647770:web:2ad5b541cc4ef8eedcf963",
  measurementId: "G-WKQMZFQMBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth };
