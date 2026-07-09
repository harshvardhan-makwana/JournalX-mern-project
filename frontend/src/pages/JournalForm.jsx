import { useState } from "react";
import axios from "axios";

export default function JournalForm() {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const tokenn=localStorage.getItem('token')
            const res=axios.post('http://localhost:3000/api/journal',{title,content},{headers:{Authorization:`Bearer ${tokenn}`}})
            alert("Entry Saved")
            setTitle("");
            setContent("");
        }catch(err){
            console.log(err)
            alert("Error :" + err.response?.data?.message || "kuch gadbad hai")
        }
    }

    
  
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="w-[400px] bg-gray-300 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-grey-800 mb-3">
          New Journal Entry
        </h2>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter The Title"
            className="w-full px-4 py-2 mb-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder="Write Here ..."
            rows="5"
            className="w-full mb-3 px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 rounded-lg text-white bg-blue-600 font-semibold mt-2 py-2">Save Entry</button>
        </form>
      </div>
    </div>
  );
}
