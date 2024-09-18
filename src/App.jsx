import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import SubscribingForm from './components/SubscribingForm/SubscribingForm'
import Footer from './components/Footer/Footer'

import HomePage from './components/Pages/HomePage/HomePage'
import ShopPage from './components/Pages/ShopPage/ShopPage'
import ShopSinglePage from './components/Pages/ShopSinglePage/ShopSinglePage'

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/food/:id" element={<ShopSinglePage />} />
    </Routes>

    <SubscribingForm />
    <Footer />
    </>
  )
}

export default App
