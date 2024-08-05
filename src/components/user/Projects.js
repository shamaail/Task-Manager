import { useEffect, useState } from "react";
import API from "../axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/v1/project/2/task");
        console.log(response.data.data);
        setProjects(response.data.data);
      } catch (error) {
        console.log("Error fetching projects:", error);
        throw error;
      }
    };
    fetchProjects();
  }, []);

  return ( 
   <>
   <button className="float-right border  py-2 px-4 rounded bg-blue-500 m-2 text-white">Create Project</button>
    <div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-xl font-medium  border border-gray-950">
              NAME
            </th>
            <th className="px-6 py-3 text-center text-xl font-medium border border-gray-950">
              DESCRIPTION
            </th>
            <th className="px-6 py-3 text-left text-xl font-medium border border-gray-950">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-xl font-medium border border-gray-950">
              CREATED AT
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-x border">
          {projects.slice(1,7).map((project) => (
            <tr key={project.id}>
              <td className="px-6 font-medium text-justify border border-gray-950">
                <h1>{project.name}</h1>
              </td>
              <td className="px-20 py-4 text-justify border border-gray-950 text-medium">
               <p>{project.description}</p>
              </td>
              <td className="px-6 py-4 border border-gray-950">
                {project.status}
              </td>
              <td className="px-6 py-4 border border-gray-950">
                {project.created_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Projects;
