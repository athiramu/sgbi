import React from 'react'
import DataTable from 'react-data-table-component';
function ProjectSummery() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
        },
        {
            name: 'Project Manager',
            selector: row => row.year,
        },
        {
            name: 'Due Date',
            selector: row => row.year,
        },
        {
            name: 'Status',
            selector: row => row.year,
        },
        {
            name: 'Progress',
            selector: row => row.year,
        },
    ];
    
    const data = [
          {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
  return (
    <>
    <div className='col-12'>

       <DataTable
       title="Project Summery"
			columns={columns}
			data={data}
            pagination
        
		/>
    </div>
    </>
  )
}

export default ProjectSummery