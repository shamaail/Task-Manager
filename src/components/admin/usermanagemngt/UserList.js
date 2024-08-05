    import { useEffect, useState } from "react";
    import API from "../../axios";
    import { Link } from "react-router-dom";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
    import EditUser from "../EditUser";

    function UserList() {
      const [users, setUsers] = useState([]);
      const [selectedUser , setSelectedUser] = useState();
      const [isModalOpen, setIsModalOpen] = useState(false);
    

      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await API.get("/v1/admin/user");
            console.log(response);
            setUsers(response.data.data.data);
          } catch (error) {
            console.log(error);
            throw error;
          }
        };
        fetchUsers();
      }, []);

      const openModal = (user) => {
        setIsModalOpen(true);
        setSelectedUser(user);
      };

      const closeModal = (user) => {
        setIsModalOpen(null);
        setSelectedUser(null)
      };


      const deleteUser =  async (userId) => {
        try{
          const response = await API.delete(`/v1/admin/user/${userId}`)
        }catch(error){
          throw error
        }
      
      }


      return (
        <div className="overflow-x-auto p-4">
          <Link to='/addUser' className="border py-2 px-4 rounded bg-blue-500 text-white float-right my-3">Create User</Link>
          
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xl font-medium border">Name</th>
                <th className="px-3 py-2 text-left text-xl font-medium border">Email</th>
                <th className="px-3 py-2 text-left text-xl font-medium border">Role</th>
                <th className="px-3 py-2 text-left text-xl font-medium border">Status</th>
                <th className="px-3 py-2 text-left text-xl font-medium border">Created at</th>
                <th className="px-3 py-2 text-left text-xl font-medium border">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 font-medium text-justify border">{user.name}</td>
                  <td className="px-6 py-3 font-medium text-justify border">{user.email}</td>
                  <td className="px-6 py-3 font-medium text-justify border">{user.role}</td>
                  <td className="px-6 py-3 font-medium text-justify border">{user.is_active ? 'Active' : 'Inactive'}</td>
                  <td className="px-6 py-3 font-medium text-justify border">{user.created_at}</td>
                  <td className="px-6 py-3 font-medium text-justify border">
                  <button onClick={() => openModal(user)}>
                    
                    <FontAwesomeIcon className="mx-2" icon={faPenToSquare}/>
                  </button>
                  <button onClick={() =>deleteUser(user.id)}><FontAwesomeIcon className="mx-2" icon={faTrash}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen ? <EditUser user={selectedUser} closeModal ={closeModal} userId={selectedUser.id}/> : ""}
        </div>
      );
    }

    export default UserList;
