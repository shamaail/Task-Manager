import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Logout from '../../authentication/Logout';
import API from '../../axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [role , setRole] = useState()
    const navigate = useNavigate()
  const addUser = async(e) => {
      e.preventDefault()
      try{
          const response = await API.post("/v1/admin/user", {
            name,
            email,
            password,
            role
          })
          console.log(response)
          navigate('/users')
      }catch(error){
          throw error
      }
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar className="w-64 bg-gray-800 text-white" />
      <div className="flex-1 p-6 overflow-auto">
        <Logout />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-gray-700">Create User</h1>
            <form className="space-y-4"
            onSubmit={addUser}
            >
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-1">Name</label>
                <input
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-1">Email</label>
                <input
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <label htmlFor="password" className="block text-lg font-medium text-gray-600 mb-1">Password</label>
                <input
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 <label htmlFor="role" className="block text-lg font-medium text-gray-600 mb-1">Role</label>
                <input
                  id="role"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
