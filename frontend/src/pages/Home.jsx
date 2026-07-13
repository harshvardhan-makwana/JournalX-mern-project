import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-4">
          JournalX 📝
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Apne thoughts, memories aur din ki baatein likhne ki sabse simple jagah. 
          Secure, Private, Sirf tumhara.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/dashboard" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 shadow-lg">
            Start Writing
          </Link>
          <Link to="/login" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50">
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
          <div className="text-5xl mb-3">🔒</div>
          <h3 className="text-xl font-bold mb-2 text-purple-700">100% Private</h3>
          <p className="text-gray-600">Tumhari diary sirf tum dekh sakte ho. JWT se secure hai.</p>
        </div>
        <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
          <div className="text-5xl mb-3">✍️</div>
          <h3 className="text-xl font-bold mb-2 text-purple-700">Easy Writing</h3>
          <p className="text-gray-600">Add, Edit, Delete karo. Koi limit nahi.</p>
        </div>
        <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
          <div className="text-5xl mb-3">☁️</div>
          <h3 className="text-xl font-bold mb-2 text-purple-700">Cloud pe Safe</h3>
          <p className="text-gray-600">Phone kharab bhi ho jaye, entries safe rahengi.</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-purple-100 py-12 px-6 text-center">
        <p className="text-2xl italic text-purple-800 max-w-3xl mx-auto">
          "Writing is the painting of the voice" 
        </p>
        <p className="mt-4 text-purple-600">- Voltaire</p>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to journal?</h2>
        <p className="text-gray-600 mb-6">Aaj se hi likhna shuru karo</p>
        <Link to="/login" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
          Get Started for Free
        </Link>
      </section>

    </div>
  )
}