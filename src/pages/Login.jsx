import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { auth } from "../firebaseConfig";
export default function Login() {
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      console.log(res?.accessToken);
      //if there is access token, navigate to home page
      if (res?.accessToken) {
        navigate("/home");
      }
    });
  }, []);
  return <LoginComponent />;
}
