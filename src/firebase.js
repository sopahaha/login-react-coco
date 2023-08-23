// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMr6dEGrtBcvXiYVzZhR__dlwcB5o_7g",
  authDomain: "exemplo-login-311fe.firebaseapp.com",
  projectId: "exemplo-login-311fe",
  storageBucket: "exemplo-login-311fe.appspot.com",
  messagingSenderId: "88876738713",
  appId: "1:88876738713:web:6d3c511084e620ca733008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;