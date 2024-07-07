import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InnerNavbar from './Components/Navbar/InnerNavbar';
import Taskmanagement from "./Pages/Taskmanagement";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Taskmanagement />}/>
       
         
     
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
