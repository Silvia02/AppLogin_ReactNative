// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBpC1toaMb8nnJafm5NVGY1_Fnk4ANgA5A",
  authDomain: "projectreport-99a0f.firebaseapp.com",
  projectId: "projectreport-99a0f",
  storageBucket: "projectreport-99a0f.appspot.com",
  messagingSenderId: "579827175559",
  appId: "1:579827175559:web:9de712abfd1186e00aa822",
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
