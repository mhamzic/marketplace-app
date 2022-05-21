import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwT7vmIXTe1PMIUFyJbz0fvA8aHXeoYs0",
  authDomain: "house-marketplace-app-243b2.firebaseapp.com",
  projectId: "house-marketplace-app-243b2",
  storageBucket: "house-marketplace-app-243b2.appspot.com",
  messagingSenderId: "418856028497",
  appId: "1:418856028497:web:b0df60eff013b48d396b70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
