  
import React from 'react';
import ReactNotifications from 'react-notifications-component';
import Notif from '../components/Notification.js'
import 'react-notifications-component/dist/theme.css';

function Classes() {
  return (
    <div className='Classes'>
        <ReactNotifications />
        <Notif 
          title = "yes"
          message = "works"
        />
    </div>
  );
}

export default Classes;