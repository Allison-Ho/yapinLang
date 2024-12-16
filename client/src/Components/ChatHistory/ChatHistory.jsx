import React from 'react';
import './ChatHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ChatHistory() {
  return (
    <div id="history-sidebar">
      <div className="icons">
        <FontAwesomeIcon icon={faSliders} style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
      </div>
      <div className="history">
        <h1>Today</h1>
        <p>Getting coffee <span>🇧🇪</span></p>
        <p>Getting coffee <span>🇧🇪</span></p>
      </div>
    </div>
  )
}

export default ChatHistory;