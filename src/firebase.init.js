// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxB-A8eDCzrq613Z2zmZZLZb8vmrPAqPI",
  authDomain: "ema-john-simple-b9e88.firebaseapp.com",
  projectId: "ema-john-simple-b9e88",
  storageBucket: "ema-john-simple-b9e88.appspot.com",
  messagingSenderId: "1017058367745",
  appId: "1:1017058367745:web:145b2acf3cd2dbdd2ea300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy