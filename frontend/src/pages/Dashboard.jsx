import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      window.location.href="/login"
      return;
    }
    const fetchEntries = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/journal",
          {headers:{Authorization:`Bearer ${token}`}}
        );
        setEntries(res.data);
        setLoading(false);
      } catch (err) {
        console.log("err : ", err);
      }
    };
    fetchEntries();
  }, []);
  if(loading) return <p>Loading...</p>

  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/api/journal/${id}`,{headers:{Authorization:`Bearer ${token}`}})
      setEntries(entries.filter((entry)=>entry._id !==id));
    }catch(err){
      console.log("DElete Error : ",err)
    }
  }
  return (
      <div className="mt-6 ms-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-5">
        {entries.map((entry) => (
          <div key={entry._id} className="rounded-2xl shadow bg-white py-5">
            <h3 className="font-bold text-lg">{entry.title}</h3>
            <p className="text-gray-500">{entry.content}</p>
            <p className="text-gray-500">{entry.date}</p>
            <span className="text-2xl block">{entry.mood}</span>
            <Link to={`editform/${entry._id}`} className="bg-blue-500 rounded-xl mt-2 px-4 text-white py-2">Edit</Link>
            <button onClick={()=>handleDelete(entry._id)} className="bg-red-500 rounded-xl ms-3 mt-2 px-2 text-white py-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    
  );
}
