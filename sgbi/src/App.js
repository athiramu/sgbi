import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InnerNavbar from './Components/Navbar/InnerNavbar';
import Taskmanagement from "./Pages/Taskmanagement";
import Dashboard from "./Pages/Dashboard";
import NewItem from "./Components/TaskManagement/Task/NewItem";
import TaskView from "./Components/TaskManagement/TaskView/TaskView";
import EditTask from "./Components/TaskManagement/EditTask/EditTask";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/task" element={<Taskmanagement />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/creadtenewItem" element={<NewItem />}/>
        <Route path="/viewtask" element={<TaskView />}/>
        <Route path="/edittask/:taskid" element={<EditTask />}/>
       
         
     
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
