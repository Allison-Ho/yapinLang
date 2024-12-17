import React from "react";
import './Chatbox.css';
import defaultUserImg from "../../imgs/default-user.jpg";
import defaultBotImg from "../../imgs/default-bot.webp";

function Chatbox() {
  return(
    <div id="chat-box">
      <div className="user">
        <div className="chat-bubble user-side">
          <p className="time">8:30 PM</p>
          <div className="content">
            <p>Hi, I would like to order an iced mocha with whipped cream please</p>
          </div>
        </div>
        <img src={defaultUserImg} alt="kermit drinking tea"></img>
      </div>

      <div className="bot">
        <img src={defaultBotImg} alt="the wild robot"></img>
        <div>
          <div className="chat-bubble bot-side">
            <div className="content">
              <p>Welche Größe wünschen Sie?</p>
            </div>
            <p className="time">8:30 PM</p>
          </div>

          <p className="ci">Confidence rating: 80%</p>
        </div>
      </div>

      <div className="user">
        <div className="chat-bubble user-side">
          <p className="time">8:31 PM</p>
          <div className="content">
            <p>I would like 8oz</p>
          </div>
        </div>
        <img src={defaultUserImg} alt="kermit drinking tea"></img>
      </div>
    </div>
  )
}

export default Chatbox;