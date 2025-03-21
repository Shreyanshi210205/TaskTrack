import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}


