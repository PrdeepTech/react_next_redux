"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 🚀 Next.js router hook
import { useState } from "react";

export default function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Normally you'd call your login API here
    if (email === "rohits043@yahoo.com" && password === "123456") {
      // Success → go to Home
      router.push("/"); // Navigate to Home page
    } else {
      alert("Invalid credentials 😢");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm">
          <Link href="/forgot" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}