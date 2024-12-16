import React from 'react';
import ChatHistory from '../ChatHistory/ChatHistory';
import Chatbox from '../Chatbox/Chatbox';
import './MainView.css'

function MainView() {
  return (
    <div id="chat-window">
      <ChatHistory></ChatHistory>
      <Chatbox></Chatbox>
    </div>
  )
}

export default MainView;