import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let navigate=useNavigate()
    const submit = () => {
        if (!name || !email || !password) {
            alert("Please fill all fields")
            return
        }

        localStorage.setItem("Name", name)
        localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)

        setname("")
        setemail("")
        setpassword("")
        alert("Successfully Registered")
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h2>

                <p className="text-center text-gray-500 mb-6">
                    Sign up to continue
                </p>

                <div className="space-y-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

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
                        Sign Up
                    </button>

                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account? 
                    <Link to="/Login" className="text-indigo-600 font-semibold cursor-pointer ml-1">Login</Link>
                </p>

            </div>

        </div>
    )
}

export default Register