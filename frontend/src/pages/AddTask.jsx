import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        mood: ""
    })
    const inputChange = (e) => {
        setFormData((currData) => {
            return { ...currData, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token")
        if(!token)
            window.location.href='/login'
        try {
            await axios.post("http://localhost:3000/api/journal", formData , {
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success("New Journal Created")
            navigate('/dashboard')
        } catch (err) {
            console.log(err)
            toast.error("Error : ", err)
        }
    }
    return (
        <div className='w-[100%] h-screen flex justify-center items-center'>
            <div className='w-[500px] bg-white rounded-2xl p-8 shadow-md rounded-xl'>
                <h2 className='text-center text-2xl font-bold mb-4'>Add new Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-black mb-2'>Title</label>
                        <input type="text" name="title" value={formData.title} onChange={inputChange} className='w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter The Title' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-black mb-2'>Content</label>
                        <textarea type="text" name="content" value={formData.content} onChange={inputChange} placeholder='Enter The Content' className='w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-black mb-2'>Mood</label>
                        <input type="text" name="mood" value={formData.mood} onChange={inputChange} placeholder='Enter The Title' className='w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required />
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white text-center mb-4 py-2 mt-4 rounded-lg hover:bg-blue-800'>Add</button>
                </form>
            </div>
        </div>
    )
}
