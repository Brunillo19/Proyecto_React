// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrqrJm9yFl7Jvth0P0AYhhVc1AEYVXy0",
  authDomain: "react-coder-7653c.firebaseapp.com",
  projectId: "react-coder-7653c",
  storageBucket: "react-coder-7653c.appspot.com",
  messagingSenderId: "933298479123",
  appId: "1:933298479123:web:29df639dd172b9b5589fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)