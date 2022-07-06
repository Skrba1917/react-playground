import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBurZ_WHlaN5KylFtDkw6cYQHlz_v1mX94",
  authDomain: "whatsapp-clone-61555.firebaseapp.com",
  projectId: "whatsapp-clone-61555",
  storageBucket: "whatsapp-clone-61555.appspot.com",
  messagingSenderId: "994356017480",
  appId: "1:994356017480:web:834fd6a971203f40c8db7d",
  measurementId: "G-S08HM24J6F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
