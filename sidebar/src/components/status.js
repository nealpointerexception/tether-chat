import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const Status = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [lastClicked, setLastClicked] = useState(null);
    const statuses = ['Studying', 'Relaxing']
    return (
      <h2 className={'nav-status'}>
        Status: {lastClicked}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <Dropdown.Toggle variant="info">
            Select Status
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

export default Status;
