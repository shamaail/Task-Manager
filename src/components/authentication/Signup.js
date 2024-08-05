import { useState } from "react"
import API from "../axios"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
      e.preventDefault()
      try{
        const response = await API.post("/v1/register",
            {
                name ,
                email,
                password
            }
        )
      const userData = response.data.data.user;
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("Stored token:", localStorage.getItem("token"));
      console.log("Stored user:", localStorage.getItem("user")); 
      navigate('/dashboard')
      } catch(error){
        console.log(error)
        throw error
      }
    
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
         onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-medium text-center mb-6">SIGNUP</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
            >Name</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"   
            >
              Sign Up
            </button>
            <Link to='/'>Sign In</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
