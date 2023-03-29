// This file is used to initialize firebase
import { getAuth} from "firebase/auth";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-1-fa601.firebaseapp.com",
  databaseURL: "https://fir-1-fa601-default-rtdb.firebaseio.com",
  projectId: "fir-1-fa601",
  storageBucket: "fir-1-fa601.appspot.com",
  messagingSenderId: "960090283806",
  appId: "1:960090283806:web:b5b8e68e171ee82be8330f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();