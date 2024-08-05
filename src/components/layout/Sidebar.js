import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTachometerAlt, faFolder, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectList from "../../projectmanagement/ProjectList";

function Sidebar() {

  return (
    <aside className="w-1/4 min-h-screen bg-white shadow-md border-r border-gray-200">
      <header className="py-5 text-left pl-5">
        <h1 className="text-5xl italic text-gray-700">Codionslab</h1>
      </header>
      <nav className="p-5">
        <ul className="space-y-6">
          <li className="flex items-center space-x-3">
            <Link to='/dashboard'>
            <FontAwesomeIcon icon={faTachometerAlt} className="text-gray-700" />
            <button className="font-bold text-gray-700 mx-3">Dashboard</button>
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <Link to='/projects'>
            <FontAwesomeIcon icon={faFolder} className="text-gray-700" />
            <button className="font-bold text-gray-700 mx-3">Projects</button>
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <Link to={'/users'}>
            <FontAwesomeIcon icon={faUsers} className="text-gray-700" />
            <button className="font-bold text-gray-700 mx-3">Users</button>
             </Link>
          </li>
  
          <li className="flex items-center space-x-3">
            <Link to={'/profile'}>
            <FontAwesomeIcon icon={faGear}/>
             <button className="font-bold text-gray-700 mx-3">Settings</button>
            </Link>
          </li>
      
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;


