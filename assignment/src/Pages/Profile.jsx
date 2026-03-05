import React, { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"

function Profile() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [edit, setEdit] = useState(false)

  useEffect(() => {

    const storedName = localStorage.getItem("Name")
    const storedEmail = localStorage.getItem("Email")
    const storedPassword = localStorage.getItem("Password")

    if (storedName) setName(storedName)
    if (storedEmail) setEmail(storedEmail)
    if (storedPassword) setPassword(storedPassword)

  }, [])


  const saveProfile = () => {

    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("Password", password)

    setEdit(false)

    alert("Profile updated successfully")

  }


  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-md shadow-lg">

          <h1 className="text-2xl font-bold text-teal-400 mb-6">
            User Profile
          </h1>


          {/* Name */}
          <div className="mb-4">

            <label className="text-gray-400 text-sm">
              Name
            </label>

            <input
              type="text"
              value={name}
              disabled={!edit}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            />

          </div>


          {/* Email */}
          <div className="mb-4">

            <label className="text-gray-400 text-sm">
              Email
            </label>

            <input
              type="email"
              value={email}
              disabled={!edit}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            />

          </div>


          {/* Password */}
          <div className="mb-6">

            <label className="text-gray-400 text-sm">
              Password
            </label>

            <input
              type="password"
              value={password}
              disabled={!edit}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            />

          </div>


          {/* Buttons */}
          {!edit ? (

            <button
              onClick={() => setEdit(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 py-2 rounded"
            >
              Edit Profile
            </button>

          ) : (

            <button
              onClick={saveProfile}
              className="w-full bg-green-500 hover:bg-green-600 py-2 rounded"
            >
              Save Changes
            </button>

          )}

        </div>

      </div>
    </>
  )
}

export default Profile