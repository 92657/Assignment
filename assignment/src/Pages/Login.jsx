import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const submit = () => {

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    const storedEmail = localStorage.getItem("Email")
    const storedPassword = localStorage.getItem("Password")

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful ✅")

      localStorage.setItem("isLogin", true)
    } else {
      alert("Invalid Email or Password ❌")
    }
    navigate("/Dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={submit}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/" className="text-indigo-600 font-semibold ml-1">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login