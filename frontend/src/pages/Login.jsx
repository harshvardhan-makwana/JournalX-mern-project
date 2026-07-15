import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/authSlice'
export default function Login() {
 
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate();
const dispatch=useDispatch();

 const handleLogin=async(e)=>{
  e.preventDefault();
 
  try{
    const res=await axios.post('http://localhost:3000/api/auth/login',{email,password})
    //localStorage.setItem('token',res.data.token);
    dispatch(setToken(res.data.token))
    toast.success("Login succesful")
    navigate('/dashboard')
  }catch(err){
    toast.error("wrong Email aur Password")
    console.log(err)
  }
}
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='bg-white w-96 p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-6'>Login</h1>
         <form action="/dashboard">
         <div className='mb-4'>
          <label htmlFor="" className='block text-grey-700 mb-2'>Email</label>
           <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter the Email' required/>
           </div>
           <div>
            <label htmlFor="" className='block text-grey-700 mb-2'>Password</label>
           <input type='password' value={password} onChange={e=>setPassword(e.target.value)} className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter the password' required/>
           </div>
           <br />
           <button onClick={handleLogin} className='text-center w-full text-white bg-blue-600 py-2 rounded-lg mb-4'>login</button>
         </form>
         <p className='text-center mt-4 text-gray-600'>
          Don't Have An Account ? 
          <Link to='/register' className="text-blue-500 font-semibold"> Register</Link>
         </p>
      </div>
    </div>
  )
}
