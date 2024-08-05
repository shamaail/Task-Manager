import Sidebar from "../components/layout/Sidebar";
import ProjectList from "../projectmanagement/ProjectList";
import Logout from "../components/authentication/Logout";

function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <ProjectList />
      </div>
    </div>
  );
}

export default AdminDashboard;
