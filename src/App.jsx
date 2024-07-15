import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './private/Login'
import Home from './public/Home'
import Register from './private/Register'

function App() {
  return (
    <>
    <Routes>
    <Route index element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/home' element={<Home />} />
    </Routes>
    </>
  )
}

export default App