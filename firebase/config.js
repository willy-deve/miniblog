
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firabase'

const firebaseConfig = {
  apiKey: "AIzaSyD-kV1KgHEY7c37fs_eykCmnfup6D-tF7s",
  authDomain: "miniblog-e8041.firebaseapp.com",
  projectId: "miniblog-e8041",
  storageBucket: "miniblog-e8041.appspot.com",
  messagingSenderId: "707421759653",
  appId: "1:707421759653:web:bdd13f7f4246fd8983054c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }