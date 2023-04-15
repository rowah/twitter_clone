// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCus-ojRcHEd7NV6H9aL_i45_YjrjQSoT0",
  authDomain: "twitter-clone-2d12c.firebaseapp.com",
  projectId: "twitter-clone-2d12c",
  storageBucket: "twitter-clone-2d12c.appspot.com",
  messagingSenderId: "664052892661",
  appId: "1:664052892661:web:8f017a9acb93799cf596bc",
  measurementId: "G-003EFX783X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
