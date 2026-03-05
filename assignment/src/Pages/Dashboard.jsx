import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

function Dashboard() {

  const [name, setName] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {

    const storedName = localStorage.getItem("Name")
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    if (storedName) {
      setName(storedName)
    }

    setCartCount(cart.length)

  }, [])

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-gray-200 p-6">

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-400">
            Welcome back, {name} 👋
          </h1>
          <p className="text-gray-400">
            Manage your store dashboard efficiently.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-gray-400 text-sm">Total Products</h2>
            <p className="text-2xl font-bold text-teal-400 mt-2">20+</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-gray-400 text-sm">Cart Items</h2>
            <p className="text-2xl font-bold text-teal-400 mt-2">{cartCount}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-gray-400 text-sm">Account Status</h2>
            <p className="text-2xl font-bold text-green-400 mt-2">Active</p>
          </div>

        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-semibold mb-4 text-teal-400">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Products */}
          <div
            onClick={() => navigate("/products")}
            className="cursor-pointer bg-teal-500 text-white p-6 rounded-xl shadow-lg hover:bg-teal-600 transition"
          >
            <h2 className="text-xl font-semibold">Browse Products</h2>
            <p className="mt-2 text-sm">
              View all available products
            </p>
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="cursor-pointer bg-teal-600 text-white p-6 rounded-xl shadow-lg hover:bg-teal-700 transition"
          >
            <h2 className="text-xl font-semibold">View Cart</h2>
            <p className="mt-2 text-sm">
              Manage items in your cart
            </p>
          </div>

          {/* Profile */}
          <div
            onClick={() => navigate("/profile")}
            className="cursor-pointer bg-teal-700 text-white p-6 rounded-xl shadow-lg hover:bg-teal-800 transition"
          >
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <p className="mt-2 text-sm">
              Update your account details
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard