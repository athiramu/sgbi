import { useState } from 'react';
import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';
import Header from './Components/Dashboard/Header/Header';
import Sidebar from './Components/Dashboard/sidebar/Sidebar';



import Taskmanagement from './Pages/Taskmanagement';
import NewItem from './Components/TaskManagement/Task/NewItem';
import TaskView from './Components/TaskManagement/TaskView/TaskView';
import EditTask from './Components/TaskManagement/EditTask/EditTask';
import Dashboard from './Pages/Dashboard';
import Home from './Components/Dashboard/Home/Home';
import Routetree from './path/routestree';







function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
     <Home/>
     <Routetree />
    </div>
  );
}

export default App;
