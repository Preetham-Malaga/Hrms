import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Employees from "./pages/employees";
import Clients from "./pages/clients";
import Vendors from "./pages/vendors";

import "./App.css";

import { supabase } from "./services/supabase";

function Dashboard() {

  return (

    <div>

      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow-sm">

          <h2 className="text-gray-500 text-sm">
            Total Employees
          </h2>

          <p className="text-4xl font-bold mt-3">
            120
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">

          <h2 className="text-gray-500 text-sm">
            Active Employees
          </h2>

          <p className="text-4xl font-bold mt-3">
            100
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">

          <h2 className="text-gray-500 text-sm">
            Pending Leaves
          </h2>

          <p className="text-4xl font-bold mt-3">
            8
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">

          <h2 className="text-gray-500 text-sm">
            New Joiners
          </h2>

          <p className="text-4xl font-bold mt-3">
            5
          </p>

        </div>

      </div>

    </div>
  );
}

function App() {

  // LOGIN STATE

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // FORM STATES

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // PASSWORD SHOW

  const [showPassword, setShowPassword] = useState(false);

  // SIGNUP TOGGLE

  const [isSignup, setIsSignup] = useState(false);

  // LOGIN & SIGNUP

  const handleLogin = async () => {

    if (isSignup) {

      // SIGNUP

      const { data, error } =
        await supabase.auth.signUp({

          email,
          password,

        });

      if (error) {

        alert(error.message);

      } else {

        alert("Signup Successful");

        setIsSignup(false);

      }

    } else {

      // LOGIN

      const { data, error } =
        await supabase.auth.signInWithPassword({

          email,
          password,

        });

      if (error) {

        alert("Invalid Email or Password");

      } else {

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        setIsLoggedIn(true);

      }
    }
  };

  // LOGIN SCREEN

  if (!isLoggedIn) {

    return (

      <div className="flex justify-center items-center min-h-screen bg-gray-100">

        <div className="bg-white p-10 rounded-3xl shadow-sm w-[400px]">

          {/* TITLE */}

          <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">

            {isSignup
              ? "HRMS Signup"
              : "HRMS Login"}

          </h1>

          {/* FULL NAME */}

          {isSignup && (

            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-200 p-3 rounded-xl mb-4 outline-none"
            />

          )}

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-200 p-3 rounded-xl mb-4 outline-none"
          />

          {/* PASSWORD */}

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-200 p-3 rounded-xl outline-none"
          />

          {/* SHOW PASSWORD */}

          <div className="flex items-center gap-2 mt-4 mb-6">

            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(!showPassword)
              }
            />

            <label className="text-sm text-gray-600">

              Show Password

            </label>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium"
          >

            {isSignup
              ? "Create Account"
              : "Login"}

          </button>

          {/* TOGGLE */}

          <p
            onClick={() =>
              setIsSignup(!isSignup)
            }
            className="text-center mt-5 text-blue-600 font-medium cursor-pointer"
          >

            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}

          </p>

        </div>

      </div>
    );
  }

  // MAIN APP

  return (

    <BrowserRouter>

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-72 h-screen bg-white border-r border-gray-200 p-5">

          {/* LOGO */}

          <div className="flex items-center gap-3 mb-10">

            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">

              H

            </div>

            <div>

              <h1 className="text-2xl font-bold text-slate-800">
                HRMS
              </h1>

              <p className="text-gray-400 text-sm">
                HR Management
              </p>

            </div>

          </div>

          {/* MENU */}

          <p className="text-gray-400 text-sm mb-4">
            Menu
          </p>

          <ul className="space-y-3">

            <li>

              <Link
                to="/"
                className="flex items-center gap-3 bg-blue-100 text-blue-600 px-4 py-3 rounded-2xl font-medium"
              >

                Dashboard

              </Link>

            </li>

            <li>

              <Link
                to="/employees"
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-3 rounded-2xl text-gray-700 font-medium transition"
              >

                Employees

              </Link>

            </li>

            <li>

              <Link
                to="/clients"
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-3 rounded-2xl text-gray-700 font-medium transition"
              >

                Clients

              </Link>

            </li>

            <li>

              <Link
                to="/vendors"
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-3 rounded-2xl text-gray-700 font-medium transition"
              >

                Vendors

              </Link>

            </li>

          </ul>

        </div>

        {/* MAIN CONTENT */}

        <div className="flex-1 bg-gray-100 min-h-screen">

          {/* NAVBAR */}

          <div className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center">

            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                HRMS Dashboard
              </h1>

              <p className="text-gray-400 mt-1">
                Welcome back 👋
              </p>

            </div>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-5">

              {/* NOTIFICATIONS */}

              <button className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600">

                Notifications

              </button>

              {/* PROFILE */}

              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">

                P

              </div>

              {/* LOGOUT */}

              <button
                onClick={() => {

                  localStorage.removeItem("isLoggedIn");

                  setIsLoggedIn(false);

                }}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >

                Logout

              </button>

            </div>

          </div>

          {/* PAGE CONTENT */}

          <div className="p-8">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/employees"
                element={<Employees />}
              />

              <Route
                path="/clients"
                element={<Clients />}
              />

              <Route
                path="/vendors"
                element={<Vendors />}
              />

            </Routes>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;