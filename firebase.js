// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhUEH9YQIiYwH6CsPPhWnwFndEqDKTL64",
    authDomain: "teach-in-two.firebaseapp.com",
    projectId: "teach-in-two",
    storageBucket: "teach-in-two.appspot.com",
    messagingSenderId: "316870296296",
    appId: "1:316870296296:web:6ebbe17459e4a9b9d3ff5d",
    measurementId: "G-W1Z1JZM88B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;