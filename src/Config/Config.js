import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARlUCS-aleQFMA7C_cli1dpCsVdIH4AR0",
  authDomain: "e-commerce-hackathon.firebaseapp.com",
  projectId: "e-commerce-hackathon",
  storageBucket: "e-commerce-hackathon.appspot.com",
  messagingSenderId: "333714930840",
  appId: "1:333714930840:web:cc5b424a6b82a635b564ed",
  measurementId: "G-MPQQPJWYT0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}