import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Logged Out Successful")
    navigate('/login')
  }

  return (
    <div className="flex text-white bg-[#1e3a8a] h-[10] gap-10 px-8 py-4 list-none text-[20px] justify-between items-center">
      
        <div className="flex items-center gap-6">
          <Link to='/'><li className="ms-3">Home</li></Link>
          <Link to="/dashboard"><li>Dashboard</li></Link>
        </div>
        <div className="flex items-center gap-4">
          {token ? (<button onClick={handleLogout}>Logout</button>) : (
            <Link to="/login"><li>Login</li></Link>
          )}

          <Link to="/register"><li>Register</li></Link>
        </div>
      
    </div>
  );
}
