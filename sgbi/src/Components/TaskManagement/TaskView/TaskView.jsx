import React, { useEffect, useState } from 'react';
import './Taskview.css'
import { Link, useNavigate } from 'react-router-dom';


function TaskView() {
    const [taskdata, setTaskdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const navigate=useNavigate()

    const handleNewItemClick = () => {
        navigate('/creadtenewItem');
      };
    useEffect(() => {
        fetch("http://localhost:5000/tasks")
            .then((res) => {
                
                return res.json();
            })
            .then((data) => {
                console.log('Data received:', data);
                setTaskdata(data);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                setError(err); // Capture the actual error object for debugging
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

   
    return (
     <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h3>Task</h3>
            </div>
            <div className='card-body'>
                <Link className='btn btn-suucess' onClick={handleNewItemClick}>Create New Task</Link>
                <table className='table table-bordered'>
                    <thead className="bg-dark">
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Priority</td>
                            <td>Date</td>
                            <td>Action</td>

                        </tr>
                            
                    </thead>
                    <tbody>
                    {
    taskdata && taskdata.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.date}</td>
            <td>
                <Link className="btn btn-success">Edit</Link>{" "}
                <Link className="btn btn-success">Delete</Link>
            </td>
        </tr>
    ))
}

                    </tbody>
                </table>
            </div>
        </div>
     </div>
    );
}

export default TaskView;
