import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import JournalForm from './pages/JournalForm'
import EditForm from './pages/EditForm'
import Footer from './components/Footer'

export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/new-entry' element={<JournalForm/>}/>
    <Route path='/dashboard/editform/:id' element={<EditForm/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
