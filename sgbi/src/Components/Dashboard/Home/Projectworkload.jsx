import React from 'react';
import './Home.css';

function Projectworkload() {
  const names = ['Sam', 'Meldy', 'Ken', 'Dmitry', 'Vego', 'Kadin', 'Melm'];
  const circlesData = [3, 4, 1, 6, 4, 1, 2]; // Array defining different numbers of circles for each name
  const maxCircles = Math.max(...circlesData); // Find the maximum number of circles

  return (
    <div className="card card-projectloadcard col-12 mt-3">
      <div className='row'>
      <div className='col'>
      <h5 className='workload-head'>Project Workload</h5>
      </div>
      <div className='col-4'>
      <select className="form-select  lastmonth-projectload rounded-pill">
        <option>Last 3 months</option>
        <option>Last 6 months</option>
        <option>Last year</option>
      </select>
      </div>
      </div>
      <div className="row row-project">
        {names.map((name, index) => {
          const numberOfCircles = circlesData[index];
          const isMaxCircles = numberOfCircles === maxCircles;

          return (
            <div key={index} className="col col-project">
              <div className="nameContainer">
                <div className="circlesContainer">
                  {Array.from({ length: numberOfCircles }).map((_, circleIndex) => (
                    <div
                      key={circleIndex}
                      className={`circle ${circleIndex === numberOfCircles - 1 && isMaxCircles ? 'top red' : (circleIndex === numberOfCircles - 1 ? 'top' : '')}`}
                    ></div>
                  ))}
                </div>
                <div className="name">{name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projectworkload;
