import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/Pages/HomePage/HomePage'
import ShopPage from './components/Pages/ShopPage/ShopPage'

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/food/:id" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
