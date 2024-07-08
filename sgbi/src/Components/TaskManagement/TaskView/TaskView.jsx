import React, { useEffect, useState, useCallback } from 'react';
import './Taskview.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

function TaskView() {
 
    const [taskdata, setTaskdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const handleNewItemClick = debounce(() => {
        navigate('/creadtenewItem');
    }, 300);

    const handleEdit = debounce((id) => {
        navigate("/edittask/" + id);
    }, 300);

    const handleDelete = ((id) => {
        if(window.confirm("do you want to delete")){
       
     
      fetch("http://localhost:5000/tasks/"  +id, {
        method: "DELETE",
        
      }).then((res) => {
        alert("Delete successfully");
     window.location.reload()
      }).catch((err) => {
        console.log(err.message);
      });
        }
    })
        
   

    const fetchTasks = useCallback(() => {
        setLoading(true);
        fetch("http://localhost:5000/tasks")
            .then((res) => res.json())
            .then((data) => {
                console.log('Data received:', data);
                setTaskdata(data);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h3>Task</h3>
                </div>
                <div className='card-body'>
                    <button className="btn btn-success" onClick={handleNewItemClick}>Create New Task</button>
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
                                            <button className="btn btn-success" onClick={() => handleEdit(item.id)}>Edit</button>{" "}
                                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
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
