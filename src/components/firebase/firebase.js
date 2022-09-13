import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlz9HvhaCPfgOtu54IOXwX3EfH-tM1L4g",
  authDomain: "web-app-f05c5.firebaseapp.com",
  projectId: "web-app-f05c5",
  storageBucket: "web-app-f05c5.appspot.com",
  messagingSenderId: "1028114879069",
  appId: "1:1028114879069:web:63ed82e1077595536ff3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};