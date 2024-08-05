import { useContext, useState } from "react";
import ProjectContext from "./ProjectContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUsers, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import API from "../components/axios";
import { Link} from "react-router-dom";
import UpdateProject from './UpdateProject'

function ProjectList() {
  const { projects} = useContext(ProjectContext);
  const [selectedProject , setSelectedProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState()

  function openModal(project){
    setSelectedProject(project);
    setIsModalOpen(true)
  }
  
  function closeModal(){
    setSelectedProject(null);
    setIsModalOpen(false)
  }
    const deleteProject = async(projectId) => {
        try{
          const response = await API.delete(`/v1/admin/project/${projectId}`)
        }catch(error){
          console.log(error)
        }
    }
  return (
    <>
      <div className="flex justify-between items-center mb-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <h1 className="text-2xl font-bold">Project List</h1>
        <Link to='/createProject' className="border py-2 px-4 rounded bg-blue-500 text-white">Create Project</Link>
      </div>
      <div className="overflow-x-auto mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-3 py-3 text-left text-xl font-medium border border-gray-950">
                NAME
              </th>
              <th className="px-3 py-3 text-center text-xl font-medium border border-gray-950">
                DESCRIPTION
              </th>
              <th className="px-3 py-3 text-center text-xl font-medium border border-gray-950">
                USERS
              </th>
              <th className="px-3 py-3 text-center text-xl font-medium border border-gray-950">
                STATUS
              </th>
              <th className="px-3 py-3 text-center text-xl font-medium border border-gray-950">
                CREATED AT
              </th>
              <th className="px-3 py-3 text-center text-xl font-medium border border-gray-950">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-x border">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-3 py-4 font-medium text-justify border border-gray-950">
                  {project.name}
                </td>
                <td className="px-6 py-4 text-justify border border-gray-950 text-medium">
                  {project.description}
                </td>
                <td className="px-6 py-4 text-center border border-gray-950 text-medium">
                  <FontAwesomeIcon icon={faUser} />
                </td>
                <td className="px-6 py-4 text-center border border-gray-950">
                  {project.is_active === 1 ? 'Active' : 'Inactive'}
                </td>
                <td className="px-6 py-4 text-center border border-gray-950">
                  {project.created_at}
                </td>
                <td className="px-6 py-4 text-center border border-gray-950">
                  <div className="flex justify-center space-x-2">
                    <button onClick={() => deleteProject(project.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  
                   
                    <button onClick={() => openModal(project)}><FontAwesomeIcon icon={faEdit} /></button>
                    
                    {/* <button><FontAwesomeIcon icon={faUsers} /></button> */}
                    <Link to='/task'><FontAwesomeIcon icon={faList} /></Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen ? <UpdateProject isOpen={isModalOpen} closeModal={closeModal} project={selectedProject}/> : " "}
      </div>
    </>
  );
}

export default ProjectList;
