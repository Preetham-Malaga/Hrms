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

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  // LOGIN / SIGNUP

  const handleLogin = async () => {

    if (isSignup) {

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

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-2">

          {/* LEFT SIDE */}

          <div className="p-16 flex flex-col justify-center">

            {/* LOGO */}

            <div className="flex items-center gap-3 mb-14">

              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">

                H

              </div>

              <h1 className="text-3xl font-bold text-slate-800">

                HRMS

              </h1>

            </div>

            {/* TITLE */}

            <h1 className="text-5xl font-bold text-slate-900 mb-4">

              Welcome Back

            </h1>

            <p className="text-gray-500 text-lg mb-10">

              Login to manage your employees and HR operations.

            </p>

            {/* EMAIL */}

            <div className="mb-6">

              <label className="block text-gray-700 mb-2 font-medium">

                Email

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />

            </div>

            {/* PASSWORD */}

            <div className="mb-6">

              <label className="block text-gray-700 mb-2 font-medium">

                Password

              </label>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />

            </div>

            {/* SHOW PASSWORD */}

            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() =>
                    setShowPassword(!showPassword)
                  }
                />

                <p className="text-gray-500">

                  Show Password

                </p>

              </div>

              <p className="text-blue-600 cursor-pointer">

                Forgot Password?

              </p>

            </div>

            {/* LOGIN BUTTON */}

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >

              {isSignup
                ? "Create Account"
                : "Login"}

            </button>

            {/* SIGNUP */}

            <p
              onClick={() =>
                setIsSignup(!isSignup)
              }
              className="text-center mt-8 text-gray-600 cursor-pointer text-lg"
            >

              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account? Signup"}

            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 relative overflow-hidden flex flex-col justify-center">

            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full"></div>

            <h1 className="text-5xl font-bold leading-tight mb-6 z-10">

              Effortlessly manage your team and operations.

            </h1>

            <p className="text-xl text-blue-100 mb-12 z-10">

              Access your HR dashboard and manage employees with ease.

            </p>

            {/* DASHBOARD CARD */}

            <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl z-10">

              <div className="grid grid-cols-3 gap-4 mb-6">

                <div className="bg-blue-600 text-white p-5 rounded-2xl">

                  <p className="text-sm">

                    Employees

                  </p>

                  <h1 className="text-3xl font-bold mt-2">

                    328

                  </h1>

                </div>

                <div className="bg-gray-100 p-5 rounded-2xl">

                  <p className="text-sm text-gray-500">

                    Attendance

                  </p>

                  <h1 className="text-3xl font-bold mt-2">

                    96%

                  </h1>

                </div>

                <div className="bg-gray-100 p-5 rounded-2xl">

                  <p className="text-sm text-gray-500">

                    Leaves

                  </p>

                  <h1 className="text-3xl font-bold mt-2">

                    24

                  </h1>

                </div>

              </div>

            </div>

          </div>

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

        {/* CONTENT */}

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

            <div className="flex items-center gap-5">

              <button className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600">

                Notifications

              </button>

              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">

                P

              </div>

              <button
                onClick={() => {

                  localStorage.removeItem(
                    "isLoggedIn"
                  );

                  setIsLoggedIn(false);

                }}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >

                Logout

              </button>

            </div>

          </div>

          {/* ROUTES */}

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