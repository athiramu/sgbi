import React, { useState } from 'react';
import './Newitem.css'
import { useNavigate } from 'react-router-dom';

function NewItem() {
  const [title, titleChange] = useState("");
  const [description, descriptionChange] = useState("");
  const [priority, priorityChange] = useState("");
  const [date, dateChange] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required";
    
    if (!priority) errors.priority = "Priority is required";
    if (!date) errors.date = "Due Date is required";
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const data = { title, description, priority, date };
    fetch("http://localhost:5000/tasks", {
      method: "POST",
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
    <form className="container mt-4 col-6" onSubmit={handleSubmit}>
      <h2 className='d-flex justify-content-center'> Create New Item</h2>
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
  );
}

export default NewItem;
