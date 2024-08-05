import React from 'react';
import { FontAwesomeIcon ,faRightFromBracket} from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import API from '../axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function Logout() {
    const navigate = useNavigate()
 const handleLogout = async () =>{
    const token = localStorage.removeItem('token')
    const user = localStorage.removeItem('user')
     toast.success("logged Out")
     if(!token && !user){
       navigate('/')
     }
 }

  return (
      <>
      <ToastContainer/>
    <div className="flex justify-center float-right m-5">
      <button className="border font-bold py-2 px-4 rounded-lg hover:bg-red-600 hover:text-gray-50 focus:outline-red-600 focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out"
      onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
    </>
  );
}

export default Logout;

