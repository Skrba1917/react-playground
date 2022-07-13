import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7XLfGP-qa-hWaz_GNRNSf0_Yh6zK4vEA",
  authDomain: "reels-clone-4cbaf.firebaseapp.com",
  projectId: "reels-clone-4cbaf",
  storageBucket: "reels-clone-4cbaf.appspot.com",
  messagingSenderId: "381769829779",
  appId: "1:381769829779:web:0224ce1731e200a6f56c66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
