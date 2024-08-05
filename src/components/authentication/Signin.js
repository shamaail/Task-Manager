import { useState } from "react"
import API from "../axios"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin (){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await API.post("/v1/login",
     {
        email ,
        password 
      },
    );
      const userData = response.data.data.user;
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      if(token){
        navigate('/dashboard')
      }else{
        toast.warn(response.message)
      }
        toast.success(response?.data?.message);

    } catch (error) {
      console.log("login error :", error)
    } 
  
    setEmail("")
    setPassword("")
  }
    return (
        <>
        <ToastContainer />
          <div className="flex items-center justify-center  min-h-screen">
            <fieldset className=" p-10 border">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="float-left font-bold mb-2">Email</label>
                  <br />
                  <input className=" border rounded w-full py-2 px-10 text-gray-700 w-full"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="mb-4">
                  <label className="float-left font-bold mb-2">Password</label>
                  <br />
                  <input className=" border rounded w-full py-2 px-10 text-gray-700"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign In
                </button>
                <br/><br />
             
                <Link to='/signup'>Sign Up</Link>
              </form>
            </fieldset>
          </div>
        </>
      )
}
export default Signin