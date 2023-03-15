
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAkSrevcG9ppsPjRzfA2Z5_bAca96wPXb8",
  authDomain: "miniblog1-6e1c9.firebaseapp.com",
  projectId: "miniblog1-6e1c9",
  storageBucket: "miniblog1-6e1c9.appspot.com",
  messagingSenderId: "1035422905382",
  appId: "1:1035422905382:web:d55aa4204132c1a53422e7",
  measurementId: "G-DVKN91Z2YF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
