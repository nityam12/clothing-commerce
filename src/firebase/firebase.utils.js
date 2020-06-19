import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDAgY0UMCk2Kk7d9OizhFNxtJISC50NWhs",
  authDomain: "react-commerce-db.firebaseapp.com",
  databaseURL: "https://react-commerce-db.firebaseio.com",
  projectId: "react-commerce-db",
  storageBucket: "react-commerce-db.appspot.com",
  messagingSenderId: "832667736868",
  appId: "1:832667736868:web:64a0c5720ee2eaf9e071b1",
  measurementId: "G-JYGX3MS9TL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;