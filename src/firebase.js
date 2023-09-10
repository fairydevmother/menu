// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-yViF_8hEy8MUigqCvRuiXqxIEUDG5lw",
  authDomain: "restaurant-cafbb.firebaseapp.com",
  databaseURL: "https://restaurant-cafbb-default-rtdb.firebaseio.com",
  projectId: "restaurant-cafbb",
  storageBucket: "restaurant-cafbb.appspot.com",
  messagingSenderId: "812776203885",
  appId: "1:812776203885:web:35053a8aa066a0c0c60164",
  measurementId: "G-74P9F1XQCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);