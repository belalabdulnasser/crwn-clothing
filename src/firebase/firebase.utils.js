/* jshint esversion:9 */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-V4sKR7Nr9etuAl2er-_lxH6VgUAtUw0",
  authDomain: "react-ecom-c58e9.firebaseapp.com",
  databaseURL: "https://react-ecom-c58e9.firebaseio.com",
  projectId: "react-ecom-c58e9",
  storageBucket: "react-ecom-c58e9.appspot.com",
  messagingSenderId: "63208289162",
  appId: "1:63208289162:web:e0ebda4aa339aede4f0e73",
  measurementId: "G-745MR6D05G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
