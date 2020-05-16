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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  console.log(snapShot);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
