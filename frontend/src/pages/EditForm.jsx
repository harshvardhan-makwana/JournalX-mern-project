import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const token = useSelector((state)=>state.auth.token)
        const res = await axios.get(`http://localhost:3000/api/journal/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        toast.error(err.response?.data?.message);
      }
    };
    fetchJournal();
  },[id]);

  const handleUpdate=async(e)=>{
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:3000/api/journal/${id}`,{title,content}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Journal Updated")
        navigate('/dashboard')
  }
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="w-[400px] bg-gray-300 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-grey-800 mb-3">
          Edit Your journal
        </h2>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter The Title"
            className="w-full px-4 py-2 mb-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write Here ..."
            rows="5"
            className="w-full mb-3 px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-lg text-white bg-blue-600 font-semibold mt-2 py-2"
            onClick={handleUpdate}
          >
            Edit Entry
          </button>
        </form>
      </div>
    </div>
  );
}
