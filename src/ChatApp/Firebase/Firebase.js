
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBE8vYTq7BH79eZDcWZ80j6L-3tnazlLFA",
    authDomain: "chatapp01-a23f7.firebaseapp.com",
    projectId: "chatapp01-a23f7",
    storageBucket: "chatapp01-a23f7.appspot.com",
    messagingSenderId: "489258374079",
    appId: "1:489258374079:web:aa5b9bac2bc915a6d7c70a",
    measurementId: "G-Y3W4KEKX7G"
  };
  
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);

  export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();


  export default Firebase