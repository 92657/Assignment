import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    setCartCount(cart.length)

  }, [])

  const logout = () => {

    localStorage.removeItem("isLogin")
    navigate("/")

  }

  return (

    <nav className="bg-black text-white px-6 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          E-Commerce
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>

          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>

          <Link to="/cart" className="hover:text-gray-300">
            Cart ({cartCount})
          </Link>

          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="flex flex-col gap-4 mt-4 md:hidden">

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/Products">Products</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/profile">Profile</Link>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      )}

    </nav>
  )
}

export default Navbar