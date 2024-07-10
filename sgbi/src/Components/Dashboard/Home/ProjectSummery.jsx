import React from 'react'
import DataTable from 'react-data-table-component';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function ProjectSummery() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Project Manager',
            selector: row => row.projectmanger,
        },
        {
            name: 'Due Date',
            selector: row => row.date,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Progress',
            cell: row => {
                const percentage = parseInt(row.progress, 10);
                let color;
                
                if (percentage === 100) {
                    color = '#4caf50'; // Green
                } else if (percentage < 40) {
                    color = '#ff9800'; // Orange
                } else if (percentage < 70) {
                    color = '#f44336'; // Red
                } else {
                    color = '#2196f3'; // Blue (default)
                }

                return (
                    <div style={{ width: '38px', height: '50px' }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${row.progress}`}
                            styles={buildStyles({
                                textSize: '30px',
                                pathColor: color,
                                textColor: color,
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                );
            },
        },
    
    ];
    
    const data = [
          {
            id: 1,
            name: 'Nalsa web development',
            projectmanger: 'Omprakash sao',
            date: 'may 26,2023',
            status: 'completed',
            progress: '100%',
        },
          {
            id: 1,
            name: 'Datascale Ai app',
            projectmanger: 'Neilsan mando',
            date: 'june 26,2023',
            status: 'Delayed',
            progress: '36%',
        },
          {
            id: 1,
            name: 'Media channel branding',
            projectmanger: 'Tiruvelly hannery',
            date: 'july 26,2023',
            status: 'At risk',
            progress: '66%',
        },
          {
            id: 1,
            name: 'coriax ios app development',
            projectmanger: 'Omprakash sao',
            date: 'may 26,2023',
            status: 'completed',
            progress: '100%',
        },
          {
            id: 1,
            name: 'website builder development',
            projectmanger: 'Omprakash sao',
            date: 'may 26,2023',
            status: 'ongoing',
            progress: '50%',
        },
      
    ]

    const customStyles = {
        headCells: {
            style: {
                fontWeight: 'bold',
            },
        },
    };
  return (
    <>
    <div className='col-12'>
        <div className='card'>
            <div className='row'>
            <div className='col'>
                <h5  className='workload-head'>Project Summery</h5>
            </div>
            <div className='col-2'>
      <select className="form-select rounded-pill">
        <option>Project</option>
        <option>Project 1</option>
        <option>Project 2</option>
      </select>
      </div>
            <div className='col-3'>
      <select className="form-select   rounded-pill">
        <option>Project Manager</option>
        <option>Project 1</option>
        <option>Project 2</option>
      </select>
      </div>
            <div className='col-2'>
      <select className="form-select rounded-pill">
        <option>Status</option>
        <option>Project 1</option>
        <option>Project 2</option>
      </select>
      </div>

            </div>

       <DataTable
       
      
			columns={columns}
			data={data}
            pagination
            customStyles={customStyles}
		/>
    </div>
    </div>
    </>
  )
}

export default ProjectSummery