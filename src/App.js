// import UserList from './admin/userManagement/UserList';
import './App.css';
import UserList from './components/admin/usermanagemngt/UserList';
import Signin from './components/authentication/Signin'
import Signup from './components/authentication/Signup';
import Sidebar from './components/layout/Sidebar';
import Projects from './components/user/Projects';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
// import UserDashboard from './pages/UserDashboard';
import ProjectCreate from './projectmanagement/ProjectCreate';
import ProjectList from './projectmanagement/ProjectList';
import { Route, BrowserRouter , Routes, Router } from 'react-router-dom';
import ProfileView from './components/Profile/ProfileView';
import Logout from './components/authentication/Logout';
import CreateUser from './components/admin/usermanagemngt/CreateUser';
import UpdateProject from './projectmanagement/UpdateProject';
import EditUser from './components/admin/EditUser';
import Columns from './components/kanbanBoard/components/Columns';
import Board from './components/kanbanBoard/components/Board';
// import UpdateProject from './projectmanagement/UpdateProject';


function App() {
  return (
    <div className="App">
      {/* <Board/> */}
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/projects' element={<AdminDashboard/>}/>`
      <Route path='/users' element={<UserDashboard/>}/>`
      <Route path='/profile' element={<ProfileView/>}/>`
      <Route path='/createProject' element={<ProjectCreate/>}/>
      <Route path='/addUser' element={<CreateUser/>}/>
      <Route path='/task' element={<Board/>}/>
    </Routes>
    </div>
  )
}

export default App;

