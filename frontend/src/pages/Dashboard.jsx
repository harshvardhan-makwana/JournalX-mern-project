import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"
      return;
    }
    const fetchEntries = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/journal",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setEntries(res.data);
        setLoading(false);
      } catch (err) {
        console.log("err : ", err);
      }
    };
    fetchEntries();
  }, []);
  if (loading) return <p>Loading...</p>

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/journal/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (err) {
      console.log("DElete Error : ", err)
    }
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 ">
      <div className="flex flex-col items-center  mb-6">
      <h1 className="text-2xl text-center font-bold mb-6 ">My Journals</h1>
      <Link to="/add" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium shadow-md">+ Add New Task</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {entries.map((entry) => (

          <div key={entry._id} className="bg-white p-5 rounded-xl shadow-md border border-gray-200 text-center flex flex-col h-full">
            <h3 className="font-bold text-lg">{entry.title}</h3>
            <p className="text-gray-500 text-sm">{entry.content}</p>
            <p className="text-gray-500 text-sm">{entry.date}</p>
            <span className="text-2xl block my-2">{entry.mood}</span>

            <div className="flex gap-3 mt-auto pt-4">
              <Link to={`editform/${entry._id}`} className="w-1/2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-4 text-white py-2 font-medium">Edit</Link>
              <button onClick={() => handleDelete(entry._id)} className="w-1/2 bg-red-500 hover:bg-red-600 rounded-lg text-sm px-4 text-white py-2 font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
