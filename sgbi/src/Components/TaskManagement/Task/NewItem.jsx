import React from 'react';
import './Newitem.css'
function NewItem() {
  return (
    <form className="container mt-4 col-6">
        <h2 className='d-flex justify-content-center'> Create New Item</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" aria-describedby="titleHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description" />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select className="form-select" id="priority">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Due Date</label>
        <input type="date" className="form-control" id="date" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default NewItem;
