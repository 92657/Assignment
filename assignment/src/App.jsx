import React from 'react'
import Register from './Pages/Register'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
