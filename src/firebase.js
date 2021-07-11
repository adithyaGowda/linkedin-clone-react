import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYhtL9v1KJQRxqKKD4NsNnUgWDhay_HzI",
  authDomain: "linkedin-clone-19cb1.firebaseapp.com",
  projectId: "linkedin-clone-19cb1",
  storageBucket: "linkedin-clone-19cb1.appspot.com",
  messagingSenderId: "520095511808",
  appId: "1:520095511808:web:547a91b404f08aa6a26fe5",
  measurementId: "G-CGE1KES3CP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
