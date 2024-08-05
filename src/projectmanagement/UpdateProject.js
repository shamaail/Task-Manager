import { useState, useEffect } from "react";
import API from "../components/axios";

function Updateprojects ({closeModal , project, projectId}){

  const [name , setName] = useState()
  const [description , setDescription] = useState()

  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description);
    }
  }, [project]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try{
  //     const response = await API.put(`/v1/admin/project/${projectId}` , {
  //       name ,
  //       description
  //     })
  //     closeModal()
  //   }catch(error){
  //     console.log(error)
  //     throw error;
  //   }
  // }
  return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h1 className="text-2xl mb-4">Edit Project</h1>
        <form handleSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
            <input
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium mb-1">Description</label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Updateprojects;
