import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InnerNavbar from './Components/Navbar/InnerNavbar';
import Taskmanagement from "./Pages/Taskmanagement";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/task" element={<Taskmanagement />}/>
        <Route path="/" element={<Dashboard />}/>
       
         
     
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
