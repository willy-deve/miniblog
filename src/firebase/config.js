
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaAx4lEJgUg5JwREie8a4toTxZm4Qenbg",
  authDomain: "projeto-miniblog-d8741.firebaseapp.com",
  projectId: "projeto-miniblog-d8741",
  storageBucket: "projeto-miniblog-d8741.appspot.com",
  messagingSenderId: "80619396208",
  appId: "1:80619396208:web:4e5f7eb7851ce6250828b5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }