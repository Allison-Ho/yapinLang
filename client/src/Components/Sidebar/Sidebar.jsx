import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import accountImg from '../../imgs/default-user.jpg';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-tab'>
        <FontAwesomeIcon icon={faHouse} size='xl' style={{color: "#ffffff",}} />
        <p>Home</p>
      </div>

      <div className='sidebar-tab'>
        <FontAwesomeIcon icon={faCircleInfo} size='xl' style={{color: "#ffffff",}} />
        <p>About</p>
      </div>

      <div className='sidebar-tab'>
        <FontAwesomeIcon icon={faGear} size='xl' style={{color: "#ffffff",}} />
        <p>Settings</p>
      </div>

      <div className='sidebar-tab'>
        <img src={accountImg} alt='kermit drinking tea'></img>
        <p>Account</p>
      </div>
    </div>
  )
}

export default Sidebar;