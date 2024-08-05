import Sidebar from "../components/layout/Sidebar";
import Logout from "../components/authentication/Logout";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-5xl text-medium text-gray-700 text-left">Dashboard</h1>
        <div className="float-right">
        <Logout/>
        </div>
   
      </div>
   
    </div>
  );
}

export default Dashboard;
