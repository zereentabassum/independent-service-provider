// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wy-UoPki7_xuZGb-8Jwp5MZHmZDY3LY",
  authDomain: "expert-writing-service.firebaseapp.com",
  projectId: "expert-writing-service",
  storageBucket: "expert-writing-service.appspot.com",
  messagingSenderId: "741440001399",
  appId: "1:741440001399:web:d9c031f9be8b499023bd72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;