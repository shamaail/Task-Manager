import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import API from '../axios';

export default function ProfileView() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await API.get("/v1/profile");
        const { name, email, password } = response.data.data;
        setProfile({ name, email, password});
      } catch (error) {
        console.log('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);
 
 const updateProfile = async(e) => {
   e.preventDefault()
   try{
     const response = await API.post("/v1/profile" , profile)
   }catch(error){
     console.log("can not update profile")
      throw error;
   }
 }
 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: type === 'checkbox' ? checked : value
  }));
};
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Profile</h1>
          <form className="space-y-6" onSubmit={updateProfile}>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={profile.password}
                onChange={handleChange}
              />
            </div>
          
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
