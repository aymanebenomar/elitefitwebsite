// src/pages/Login.jsx
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setErrorMsg(error.message);
    else navigate("/admin"); // redirect to admin page on success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <button type="submit" className="w-full bg-red-600 p-2 rounded hover:bg-red-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
