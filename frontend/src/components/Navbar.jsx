import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")

const handleLogout=()=>{
localStorage.removeItem("token")
toast.success("Logged Out Successful")
navigate('/login')
}

  return (
    <div className="flex text-white bg-blue-500 h-[10] gap-10 list-none text-[20px]">
      <Link to='/'><li className="ms-3">Home</li></Link>
      {token? (<button onClick={handleLogout}>Logout</button>):(
      <Link to="/login"><li>Login</li></Link>
)}
      <Link to="/dashboard"><li>Dashboard</li></Link>
      <Link to="/register"><li>Register</li></Link>
    </div>
  );
}
