import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function TodayTask() {
  const [key, setKey] = useState('home');

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title={<span className="custom-tab-title">All</span>}>
           
            <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>          
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
             
              
            </Tab>
            <Tab eventKey="important" title={<span className="custom-tab-title">Important</span>}>
              <p><input class="form-check-input" type="radio" />Tab content for Important</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
            </Tab>
            <Tab eventKey="notes" title={<span className="custom-tab-title">Notes</span>}>
            <input class="form-check-input" type="radio" />Tab content for Notes
            </Tab>
            <Tab eventKey="links" title={<span className="custom-tab-title">Links</span>}>
            <p><input class="form-check-input" type="radio" />Tab content for Important</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
              <p><input class="form-check-input" type="radio" />Create a user flowof social application design</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default TodayTask;
