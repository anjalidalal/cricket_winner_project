// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk9pKho80etgChq0ahYJK1naEaZMNrvMo",
  authDomain: "icricket-winner.firebaseapp.com",
  projectId: "icricket-winner",
  storageBucket: "icricket-winner.appspot.com",
  messagingSenderId: "690058650640",
  appId: "1:690058650640:web:391a8a175ac8779c155695",
  measurementId: "G-EZYC3Y74NP",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, app };
