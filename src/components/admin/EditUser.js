import { useEffect , useState} from 'react';
import API from '../axios';

function EditUser({user , closeModal , userId}) {
      const [name , setName] = useState();
      const [email , setEmail] = useState();
      const [password , setPassword] = useState();
      const [role , setRole] = useState();
      const [is_active , setIs_Active] = useState();
    useEffect(() => {
        if (user) {
          setName(user.name);
          setEmail(user.email);
          setPassword(user.password);
          setRole(user.role);
          setIs_Active(user.isActive);
        }
      }, [user]);
      const handleSubmit = async (e) => {
          e.preventDefault()
         try{
            const response = await API.put(`/v1/admin/user/${userId}` , {
                name, 
                email,
                password,
                role,
                is_active
            })
         }catch(error){
             throw error
         }
          
          closeModal();
      }



  return (
    <>
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h1 className="text-2xl mb-4">Edit User Profile</h1>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">Name</label>
              <input className="border w-full p-2 mb-4" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <label className="block mb-2">Email</label>
              <input className="border w-full p-2 mb-4" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label className="block mb-2">Pawword</label>
              <input className="border w-full p-2 mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label className="block mb-2">Role</label>
              <input className="border w-full p-2 mb-4" type="text" value={role} onChange={(e) => setRole(e.target.value)}/>
              <label className="block mb-2">Is Active</label>
              <input className="border w-full p-2 mb-4" type="text" value={is_active} onChange={(e) => setIs_Active(e.target.value)}/>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="px-4 py-2 bg-red-600 text-white rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
  
    </>
  );
}

export default EditUser;
