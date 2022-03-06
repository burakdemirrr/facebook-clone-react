// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiAsWyWXDZrPHQOXxXlWTo30k-FJHp0zA",
  authDomain: "facebook-last-ee603.firebaseapp.com",
  projectId: "facebook-last-ee603",
  storageBucket: "facebook-last-ee603.appspot.com",
  messagingSenderId: "100139170785",
  appId: "1:100139170785:web:f936c42e8f9988fd5230a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore();
const auth=getAuth();
export const storage=getStorage();

export  {auth,db};
