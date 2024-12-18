import React from 'react';
import ChatHistory from '../ChatHistory/ChatHistory';
import Chatbox from '../Chatbox/Chatbox';
import Sidebar from '../Sidebar/Sidebar';
import './MainView.css'

function MainView() {
  return (
    <div className='main-view'>
      <Sidebar></Sidebar>
      <div className="chat-window">
        <ChatHistory></ChatHistory>
        <Chatbox></Chatbox>
      </div>
    </div>
  )
}

export default MainView;