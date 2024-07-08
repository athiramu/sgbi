import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditTask() {
    const {taskid}=useParams()
    const [title, titleChange] = useState("");
    const [description, descriptionChange] = useState("");
    const [priority, priorityChange] = useState("");
    const [date, dateChange] = useState("");
    const [errors, setErrors] = useState({});
    const [taskdata, setTaskdata] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const navigate = useNavigate();
 
    const validate = () => {
      const errors = {};
      if (!title.trim()) errors.title = "Title is required";
      
      if (!priority) errors.priority = "Priority is required";
      if (!date) errors.date = "Due Date is required";
      return errors;
    }
    const fetchTasks = useCallback(() => {
        setLoading(true);
        fetch("http://localhost:5000/tasks/"+taskid)
            .then((res) => res.json())
            .then((data) => {
                titleChange(data.title)
            descriptionChange(data.description)
            priorityChange(data.priority)
            dateChange(data.date)
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                setErrors(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      const data = {title, description, priority, date };
      fetch("http://localhost:5000/tasks/"+taskid, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then((res) => {
        alert("Saved successfully");
        navigate('/viewtask');
      }).catch((err) => {
        console.log(err.message);
      });
    }
  return (
    <>
       <form className="container mt-4 col-6" onSubmit={handleSubmit}>
      <h2 className='d-flex justify-content-center'> Edit Task</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={e => titleChange(e.target.value)} />
        {errors.title && <div className="text-danger">{errors.title}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description" value={description} onChange={e => descriptionChange(e.target.value)} />
       
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select className="form-select" id="priority" value={priority} onChange={e => priorityChange(e.target.value)}>
          <option value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        {errors.priority && <div className="text-danger">{errors.priority}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Due Date</label>
        <input type="date" className="form-control" id="date" value={date} onChange={e => dateChange(e.target.value)} />
        {errors.date && <div className="text-danger">{errors.date}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </>
  )
}

export default EditTask