import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../../services/supabase";

const Signup = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      companyName: "",
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

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Signup Authentication
    const { data, error } =
      await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

    // Auth Error
    if (error) {
      setLoading(false);

      alert(error.message);

      return;
    }

    // Check User Exists
    if (!data?.user) {
      setLoading(false);

      alert(
        "Signup successful. Please verify your email."
      );

      return;
    }

    // Save User Data
    const { error: insertError } =
      await supabase.from("users").insert([
        {
          id: data.user.id,
          full_name: formData.fullName,
          company_name:
            formData.companyName,
          email: formData.email,
          role: "Employee",
        },
      ]);

    setLoading(false);

    // Insert Error
    if (insertError) {
      alert(insertError.message);
    } else {
      alert(
        "Account created successfully! Check your email."
      );
    }
  };

  return (
    <div className="h-screen overflow-hidden flex bg-[#eaedfe]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#363b6c] to-[#4d52a3] items-center justify-center px-12 py-8">

        <div className="max-w-md text-white">

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight">
            Build Your Smart Workforce
          </h1>

          <p className="mt-5 text-base text-gray-200 leading-7">
            Modern HRMS & Staffing platform
            for onboarding, payroll,
            recruitment, approvals,
            vendors, and employee
            management.
          </p>

          {/* Analytics Card */}
          <div className="mt-8 bg-white rounded-3xl p-5 shadow-2xl">

            <h2 className="text-[#363b6c] text-xl font-bold">
              Workforce Analytics
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Enterprise workforce insights
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">

              <div className="bg-[#f5f6ff] p-4 rounded-2xl">

                <h3 className="text-2xl font-bold text-[#363b6c]">
                  240+
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Employees
                </p>

              </div>

              <div className="bg-[#f5f6ff] p-4 rounded-2xl">

                <h3 className="text-2xl font-bold text-[#363b6c]">
                  18
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Hiring
                </p>

              </div>

              <div className="bg-[#f5f6ff] p-4 rounded-2xl">

                <h3 className="text-2xl font-bold text-[#363b6c]">
                  96%
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Attendance
                </p>

              </div>

              <div className="bg-[#f5f6ff] p-4 rounded-2xl">

                <h3 className="text-2xl font-bold text-[#363b6c]">
                  12
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Approvals
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-6">

        <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-5">

            <div className="w-14 h-14 rounded-2xl bg-[#363b6c] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              P
            </div>

          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-[#363b6c]">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
            Start managing your workforce
            smarter
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSignup}
            className="space-y-4"
          >

            {/* Full Name */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <div className="flex items-center mt-2 border border-gray-300 rounded-2xl px-4 h-12 focus-within:border-[#363b6c]">

                <User
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full ml-3 outline-none bg-transparent text-sm"
                />

              </div>

            </div>

            {/* Company Name */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Company Name
              </label>

              <div className="flex items-center mt-2 border border-gray-300 rounded-2xl px-4 h-12 focus-within:border-[#363b6c]">

                <Building2
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full ml-3 outline-none bg-transparent text-sm"
                />

              </div>

            </div>

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
                  placeholder="Create password"
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

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-1">

              <input type="checkbox" />

              <p>
                I agree to the Terms &
                Conditions
              </p>

            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-[#363b6c] hover:bg-[#2f3360] text-white h-12 rounded-2xl font-semibold transition-all shadow-lg"
            >

              {loading
                ? "Creating Account..."
                : "Create Account"}

            </button>

            {/* Login */}
            <p className="text-center text-gray-500 text-sm pt-2">

              Already have an account?{" "}

              <Link
                to="/"
                className="text-[#363b6c] font-semibold"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Signup;