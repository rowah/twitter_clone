import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Create from "../pages/Create";
import Home from "../pages/Home";
import ProfileComponent from "../components/layouts/ProfileComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/createaccount",
    element: <Create />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <ProfileComponent />,
  },
]);
