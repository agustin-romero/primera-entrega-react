// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCftUIe7pTETZnKjIhHA0hYWlITuTHsAI",
  authDomain: "proyecto-final-react-31f2c.firebaseapp.com",
  projectId: "proyecto-final-react-31f2c",
  storageBucket: "proyecto-final-react-31f2c.appspot.com",
  messagingSenderId: "33892506764",
  appId: "1:33892506764:web:a6ebc7d310724b59252fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 


