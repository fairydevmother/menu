import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Create Firestore instance

export default db;