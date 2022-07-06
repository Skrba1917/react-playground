// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQipP9g50Cd98Sy-fEhgdEsEJ7r924_h4",
  authDomain: "disneyplus-clone-2d43d.firebaseapp.com",
  projectId: "disneyplus-clone-2d43d",
  storageBucket: "disneyplus-clone-2d43d.appspot.com",
  messagingSenderId: "21898280897",
  appId: "1:21898280897:web:2269111fbfb707680bf940",
  measurementId: "G-6Y2K65V3YQ",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
