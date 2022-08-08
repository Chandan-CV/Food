import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaHTtBsjKQHC5zS0fh_caxkEKeh9lvX1Q",
  authDomain: "amaatradiwaliapp.firebaseapp.com",
  databaseURL: "https://amaatradiwaliapp.firebaseio.com",
  projectId: "amaatradiwaliapp",
  storageBucket: "amaatradiwaliapp.appspot.com",
  messagingSenderId: "532081577408",
  appId: "1:532081577408:web:ac4b5542900db1b8028c25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db, app}