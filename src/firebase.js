// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDsuRe0daQrbKhzzFUjeaOAZrGbuEs5tWo",
  authDomain: "chat-app-a5f0c.firebaseapp.com",
  projectId: "chat-app-a5f0c",
  storageBucket: "chat-app-a5f0c.appspot.com",
  messagingSenderId: "423170073206",
  appId: "1:423170073206:web:05f2989ae8bb8d49a03557"
};

 initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
export {auth , provider , db}; 