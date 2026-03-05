import React from 'react'
import Register from './Pages/Register'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Products' element={<Products/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
