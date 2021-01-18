import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Options = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [lastClicked, setLastClicked] = useState(null);
    const statuses = ['CSE 100', 'CSE 120', 'CSE 20', 'CSE 30']
    return (
      <h2 className={'nav-class'}>
        Class: {lastClicked}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <Dropdown.Toggle variant="info">
            Select Class
          </Dropdown.Toggle>
          <Dropdown.Menu>
                {statuses.map(status => (
                    <Dropdown.Item onClick={() => setLastClicked(status)}>{status}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
      </h2>
    );
  }

export default Options;
