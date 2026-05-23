import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { supabase } from "../../services/supabase";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

    setLoading(false);

    // Invalid Login
    if (error) {
      alert("Invalid email or password");

      return;
    }

    // Success Login
    alert("Login successful!");

    navigate("/dashboard");
  };

  return (
    <div className="h-screen overflow-hidden flex bg-[#eaedfe]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#363b6c] to-[#4d52a3] items-center justify-center px-12 py-8">

        <div className="max-w-md text-white">

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to Your HRMS Platform
          </h1>

          <p className="mt-5 text-base text-gray-200 leading-7">
            Manage employees, recruitment,
            onboarding, payroll, vendors,
            approvals, and workflows in one
            modern enterprise platform.
          </p>

          {/* Dashboard Preview */}
          <div className="mt-8 bg-white rounded-3xl p-5 shadow-2xl">

            <h2 className="text-[#363b6c] text-xl font-bold">
              Employee Overview
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Modern workforce operations
            </p>

            {/* Employee Cards */}
            <div className="space-y-3 mt-6">

              {/* Employee */}
              <div className="flex items-center justify-between bg-[#f5f6ff] p-3 rounded-2xl">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-[#a8a3e3]"></div>

                  <div>

                    <h4 className="text-[#363b6c] font-semibold text-sm">
                      John Smith
                    </h4>

                    <p className="text-xs text-gray-500">
                      HR Manager
                    </p>

                  </div>

                </div>

                <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                  Active
                </div>

              </div>

              {/* Employee */}
              <div className="flex items-center justify-between bg-[#f5f6ff] p-3 rounded-2xl">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-[#363b6c]"></div>

                  <div>

                    <h4 className="text-[#363b6c] font-semibold text-sm">
                      Sarah Wilson
                    </h4>

                    <p className="text-xs text-gray-500">
                      Recruiter
                    </p>

                  </div>

                </div>

                <div className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
                  Pending
                </div>

              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              <div className="bg-[#f5f6ff] p-3 rounded-2xl text-center">

                <h3 className="text-xl font-bold text-[#363b6c]">
                  240
                </h3>

                <p className="text-xs text-gray-500">
                  Employees
                </p>

              </div>

              <div className="bg-[#f5f6ff] p-3 rounded-2xl text-center">

                <h3 className="text-xl font-bold text-[#363b6c]">
                  18
                </h3>

                <p className="text-xs text-gray-500">
                  Hiring
                </p>

              </div>

              <div className="bg-[#f5f6ff] p-3 rounded-2xl text-center">

                <h3 className="text-xl font-bold text-[#363b6c]">
                  12
                </h3>

                <p className="text-xs text-gray-500">
                  Approvals
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-6">

        <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-5">

            <div className="w-14 h-14 rounded-2xl bg-[#363b6c] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              P
            </div>

          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-[#363b6c]">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
            Login to continue to your account
          </p>

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >

            {/* Email */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>

              <div className="flex items-center mt-2 border border-gray-300 rounded-2xl px-4 h-12 focus-within:border-[#363b6c]">

                <Mail
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full ml-3 outline-none bg-transparent text-sm"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center mt-2 border border-gray-300 rounded-2xl px-4 h-12 focus-within:border-[#363b6c]">

                <Lock
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full ml-3 outline-none bg-transparent text-sm"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-gray-400"
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-gray-400"
                    />
                  )}
                </button>

              </div>

            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm pt-1">

              <label className="flex items-center gap-2 text-gray-600">

                <input type="checkbox" />

                Remember me

              </label>

              <button
                type="button"
                className="text-[#363b6c] font-semibold"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#363b6c] hover:bg-[#2f3360] disabled:bg-gray-400 text-white h-12 rounded-2xl font-semibold transition-all shadow-lg"
            >

              {loading
                ? "Logging in..."
                : "Login"}

            </button>

            {/* Signup */}
            <p className="text-center text-gray-500 text-sm pt-2">

              Don’t have an account?{" "}

              <Link
                to="/signup"
                className="text-[#363b6c] font-semibold"
              >
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;