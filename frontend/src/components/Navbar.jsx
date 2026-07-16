import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Logged Out Successful")
    navigate('/login')
  }

const activeStyle = "bg-blue-700 px-3 py-2 rounded-lg font-semibold"
  const normalStyle = "hover:bg-blue-800 px-3 py-2 rounded-lg transition"


  return (
    <div className="flex text-white bg-[#1e3a8a] h-[10] gap-10 px-8 py-4 list-none text-[20px] justify-between items-center">
      
        <div className="flex items-center gap-6">
          <NavLink to='/' className={({isActive})=>isActive?activeStyle:normalStyle}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>isActive?activeStyle:normalStyle}>Dashboard</NavLink>
        </div>
        <div className="flex items-center gap-4">
          {token ? (<button onClick={handleLogout} className={normalStyle}>Logout</button>) : (
            <NavLink to="/login" className={({isActive})=>isActive?activeStyle:normalStyle}>Login</NavLink>
          )}

          <NavLink to="/register" className={({isActive})=>isActive?activeStyle:normalStyle}>Register</NavLink>
        </div>
      
    </div>
  );
}
