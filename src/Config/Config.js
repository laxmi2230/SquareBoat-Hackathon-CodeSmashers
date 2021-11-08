import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAJ-qX6Z4bqWXWqhD9lgkK_3zPctJQFsU",
  authDomain: "newecommer-51fa8.firebaseapp.com",
  projectId: "newecommer-51fa8",
  storageBucket: "newecommer-51fa8.appspot.com",
  messagingSenderId: "1074478355126",
  appId: "1:1074478355126:web:61d75a9906f9b556918c17"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }
