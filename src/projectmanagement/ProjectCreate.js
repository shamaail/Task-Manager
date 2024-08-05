import { useContext } from "react";
import ProjectContext from "./ProjectContext";
import API from "../components/axios";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { useNavigate } from "react-router-dom";

function ProjectCreate() {
  const { projects, name , setName , description , setDescription } = useContext(ProjectContext);
  const navigate = useNavigate()


  const addProject = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/v1/admin/project", {
        name,
        description,
      });
      console.log(response)
      console.log(projects);
      setName("");
      setDescription("");
      navigate('/projects')

    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-2xl  sm:text-3xl md:text-4xl py-3 text-center">Create Project</h1>
          <fieldset>
            <form
              onSubmit={addProject}
              className="border max-w-xl space-y-3 pb-2 my-2 mx-auto px-4 sm:px-6 lg:px-8"
            >
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-1 w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter project description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="text-right pr-0 sm:pr-9">
                <button type="button" className="border rounded h-9 px-3 m-2">
                  Cancel
                </button>
                <button
                  className="border rounded p-1 bg-blue-500 text-slate-50 h-9 px-3"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default ProjectCreate;