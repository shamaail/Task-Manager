import { useState } from "react"
import ProjectContext from "./ProjectContext"
import { useEffect } from "react";
import API from "../components/axios";

const ProjectProvider = ({children}) => {
    const [projects , setProjects] = useState([]);
    const [name , setName] = useState();
    const [description , setDescription] = useState()
       useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/v1/admin/project" , {
        });
        console.log(response.data.data.data);
        setProjects(response.data.data.data);
      } catch (error) {
        console.log("Error fetching projects:", error);
        throw error;
      }
    };
    fetchProjects();
  }, []);

    return(
    <ProjectContext.Provider value={{projects , setProjects , name , setName , description , setDescription}}>
      {children}
    </ProjectContext.Provider>
    )
}
export default ProjectProvider;
