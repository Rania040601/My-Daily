import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC6ZeKnNJuxboqfmg4jTSdSYdbmdcZXPSo",
    authDomain: "asutaikucing-9e770.firebaseapp.com",
    databaseURL: "https://asutaikucing-9e770-default-rtdb.firebaseio.com",
    projectId: "asutaikucing-9e770",
    storageBucket: "asutaikucing-9e770.appspot.com",
    messagingSenderId: "213264282848",
    appId: "1:213264282848:web:8998cce6a75dbf02428c85"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
