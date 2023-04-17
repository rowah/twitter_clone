import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";
export default function Login() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      console.log(res?.accessToken);
      //if there is access token, navigate to home page
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}
