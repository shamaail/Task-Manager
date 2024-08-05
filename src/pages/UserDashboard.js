import UserList from "../components/admin/usermanagemngt/UserList";
import Sidebar from "../components/layout/Sidebar";

function UserDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-1/4 bg-gray-800 text-white" />
      <UserList className="w-3/5 bg-white" />
    </div>
  );
}

export default UserDashboard;
