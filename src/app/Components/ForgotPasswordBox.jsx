"use client";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password request for:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          <Link href="/Login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
