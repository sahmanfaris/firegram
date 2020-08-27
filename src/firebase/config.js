import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpUXNsGtYV4rxx-7ApdYQ4SLRSAbaHWng",
  authDomain: "refa-firegram.firebaseapp.com",
  databaseURL: "https://refa-firegram.firebaseio.com",
  projectId: "refa-firegram",
  storageBucket: "refa-firegram.appspot.com",
  messagingSenderId: "962156431694",
  appId: "1:962156431694:web:9bf1c906f162d67c08361f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
