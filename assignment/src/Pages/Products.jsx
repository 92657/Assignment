import React, { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"

function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products")
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Error loading products")
        setLoading(false)
      })

  }, [])

  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    const exists = cart.find((item) => item.id === product.id)

    if (exists) {
      alert("Product already in cart")
      return
    }

    cart.push({ ...product, qty: 1 })

    localStorage.setItem("cart", JSON.stringify(cart))

    alert("Product added to cart")

  }

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-white p-6">

        <h1 className="text-3xl font-bold text-teal-400 mb-6">
          Products
        </h1>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 text-lg">
            Loading products...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-400 text-lg">
            {error}
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow hover:shadow-xl transition"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />

                <h2 className="text-sm font-semibold line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-teal-400 font-bold mt-2">
                  ${product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-teal-500 hover:bg-teal-600 py-2 rounded-lg"
                >
                  Add to Cart
                </button>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  )
}

export default Products