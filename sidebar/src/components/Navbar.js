import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import UserAvatar from './Avatar';
import TodoList from './ui/TodoList';
import StateProvider from './wrappers/StateProvider';
import KeyStrokeHandler from './wrappers/KeyStrokeHandler';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);


  return (
    <>
        <nav className={'nav-menu'}>
          
        < div style={{
        position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)'
        
    }}>
      <UserAvatar size="100" name="Vela Rajesh" />  
    
      </div>   
          
          <ul className='nav-menu-items' >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} 
            <div>
          <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
            </StateProvider>
            </div>
          </ul>
         
        </nav>

  
    

    </>
  );
}

export default Navbar;
