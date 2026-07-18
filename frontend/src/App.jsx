import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EditForm from './pages/EditForm'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import Register from './pages/Register'
import AddTask from './pages/AddTask'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
   <BrowserRouter>
   <Navbar/>
   <main className='flex-grow'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/add' element={<AddTask/>}/>
    <Route path='/dashboard/editform/:id' element={<EditForm/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </main>
   <Footer/>
   </BrowserRouter>
   <ToastContainer/>
   </div>
  )
}
