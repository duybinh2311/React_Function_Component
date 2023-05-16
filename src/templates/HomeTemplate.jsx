import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 770 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
