import React from 'react'
import Taskmanagement from './Pages/Taskmanagement'
import Dashboard from './Pages/Dashboard'
import NewItem from './Components/TaskManagement/Task/NewItem'
import EditTask from './Components/TaskManagement/EditTask/EditTask'
import TaskView from './Components/TaskManagement/TaskView/TaskView'

function Rotetree() {
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
  )
}

export default Rotetree