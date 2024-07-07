import React from 'react'

function TaskManagement() {
  return (
    <>
    <div className='container'>
    <input
        type="text"
        placeholder="  Search..."
        className='border border-light mt-2 py-1 col-3 my-2'
        // value={searchTerm}
        // onChange={handleChange}
      />


      <div className='row'>
<div className='col-3'>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
</div>
<div className='col-3'>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
</div>
<div className='col-3'>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
</div>
<div className='col-3'>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
</div>
      </div>
    </div>
    
    </>
  )
}

export default TaskManagement