import React from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import { Outlet, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
