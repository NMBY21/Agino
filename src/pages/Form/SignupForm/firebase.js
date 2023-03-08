import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL881ZBKIX0oFy6j3b9N2iQEV0VlPJNuo",
    authDomain: "eadf-d57d9.firebaseapp.com",
    projectId: "eadf-d57d9",
    storageBucket: "eadf-d57d9.appspot.com",
    messagingSenderId: "58439263433",
    appId: "1:58439263433:web:59b9c07f435399cf691918"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
