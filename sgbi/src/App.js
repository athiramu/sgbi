import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InnerNavbar from './Components/Navbar/InnerNavbar';
import Taskmanagement from "./Pages/Taskmanagement";
import Dashboard from "./Pages/Dashboard";
import NewItem from "./Components/TaskManagement/Task/NewItem";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Taskmanagement />}/>
        <Route path="/dash" element={<Dashboard />}/>
        <Route path="/creadtenewItem" element={<NewItem />}/>
       
         
     
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
