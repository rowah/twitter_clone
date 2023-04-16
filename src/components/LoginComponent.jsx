import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";
export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const googleLogIn = async () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };
  const login = async () => {
    try {
      const res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed into Twitter");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className="bg-gray-400 ">
      <div className="flex min-h-screen items-center justify-center">
        <div className="min-h-1/2 bg-white rounded-2xl ">
          <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
            <svg
              viewBox="0 0 24 24"
              className=" h-12 w-12 text-sky-500"
              fill="currentColor"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <h1 className="text-black text-2xl font-sans">
              Sign in to Twitter
            </h1>

            <button
              onClick={googleLogIn}
              className="flex border w-full rounded-full space-x-2 py-1 hover:bg-gray-200"
            >
              <div className="ml-10">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="mt-1 w-4 mr-1"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              </div>

              <div className="text-s">Sign in with Google</div>
            </button>

            {/* <GoogleButton
              onClick={login}
              style={{
                backgroundColor: "#4299e1",
                color: "#fff",
                border: "1px solid",
                borderRadius: "15px",
              }}
            /> */}

            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
              </span>
            </div>
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              className="w-full p-2 bg-white rounded-md  border border-gray-300 focus:border-blue-300"
              placeholder="Phone, email, username"
              type="email"
              name="correo"
              id=""
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              className="w-full p-2 bg-white rounded-md border border-gray-300 "
              placeholder="password"
              type="password"
              name="correo"
              id=""
            />
            <button
              onClick={login}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
            >
              Sign In
            </button>
            <button
              onClick={login}
              className="w-full border border-gray-400 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
            >
              Forgot Password?
            </button>
            <p>
              Don't have an account?
              <a className="font-semibold text-sky-500" href="">
                Sign Up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
