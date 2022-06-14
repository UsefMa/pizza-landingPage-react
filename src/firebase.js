// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzb-avwy-o5lsPu__9AQZNYoG3z6TzhoU",
  authDomain: "auth-testing-fcd2f.firebaseapp.com",
  projectId: "auth-testing-fcd2f",
  storageBucket: "auth-testing-fcd2f.appspot.com",
  messagingSenderId: "925735320290",
  appId: "1:925735320290:web:c1fb1361672f4776e43cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app