import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwwvVRfv-j1Xb6I6eafWvXOhTsbYoDPb8",
  authDomain: "learns-a-lot.firebaseapp.com",
  projectId: "learns-a-lot",
  storageBucket: "learns-a-lot.appspot.com",
  messagingSenderId: "449942385596",
  appId: "1:449942385596:web:47e72a54fcc5036e69b1b9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default {
  db,
  auth,
  provider,
};
