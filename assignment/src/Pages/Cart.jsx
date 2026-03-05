import React, { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"

function Cart() {

  const [cart, setCart] = useState([])

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)

  }, [])


  const updateCart = (updatedCart) => {
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }


  const increaseQty = (id) => {

    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )

    updateCart(updated)
  }


  const decreaseQty = (id) => {

    const updated = cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )

    updateCart(updated)
  }


  const removeItem = (id) => {

    const updated = cart.filter((item) => item.id !== id)
    updateCart(updated)

  }


  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-white p-6">

        <h1 className="text-3xl font-bold text-teal-400 mb-6">
          Your Cart
        </h1>


        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (

          <div className="space-y-6">

            {cart.map((item) => {

              const subtotal = item.price * item.qty

              return (

                <div
                  key={item.id}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 object-contain"
                  />

                  <div className="flex-1">

                    <h2 className="font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-teal-400 font-bold">
                      ${item.price}
                    </p>

                  </div>


                  {/* Quantity Controls */}

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-700 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-700 px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>


                  {/* Subtotal */}

                  <div className="text-teal-400 font-semibold">
                    ${subtotal.toFixed(2)}
                  </div>


                  {/* Remove */}

                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    Remove
                  </button>

                </div>

              )

            })}


            {/* Cart Total */}

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex justify-between items-center">

              <h2 className="text-xl font-semibold">
                Cart Total
              </h2>

              <p className="text-2xl text-teal-400 font-bold">
                ${cartTotal.toFixed(2)}
              </p>

            </div>

          </div>

        )}

      </div>
    </>
  )
}

export default Cart