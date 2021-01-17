import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class Notif extends React.Component {
    render(){
        return (
        <>
            <button
            onClick={() => {
                store.addNotification({
                title: this.props.title,
                message: this.props.message,
                type: 'info',                         // 'default', 'success', 'info', 'warning'
                container: 'top-right',                  // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                dismiss: {
                    duration: 3000
                }
                })
            }}
            >
            Add notification
            </button>
        </>
        );
    }
}

export default Notif