import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/authSlice'

export default function Register() {
    const dispatch=useDispatch();
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    let handleInputChange = (e) => {
        setFormData((currData) => {
            return { ...currData, [e.target.name]: e.target.value }
        })
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("http://localhost:3000/api/auth/register", formData)
            dispatch(setToken(res.data.token))
            //localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data))
            toast.success("Register Successful")
            setFormData({
                name: "",
                email: "",
                password: ""
            })
        } catch (err) {
            toast.error("Registration Failed")
        }
    }
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[40%] bg-white rounded-lg p-8 shadow-md'>
                <h2 className='text-2xl font-bold text-center mb-2'>Register</h2>
                <form action="" method='post' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-grey-700 mb-2'>Name</label>
                        <input type="text" placeholder='Enter Your Name' value={formData.name} name="name" onChange={handleInputChange} className='w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-grey-700 mb-2'>Email</label>
                        <input type="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleInputChange} className='w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-grey-700 mb-2'>Password</label>
                        <input type="password" placeholder='Enter Your Password' name="password" value={formData.password} onChange={handleInputChange} className='w-full rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required' />
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-center rounded-lg mb-4 py-2 text-white'>Register</button>
                </form>
            </div>
        </div>
    )
}
