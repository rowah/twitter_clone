import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

//contains all auth data from firebaseconfig
export const LoginAPI = (email, password) => {
  try {
    const response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};

export const GoogleSignInAPI = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    return error;
  }
};
