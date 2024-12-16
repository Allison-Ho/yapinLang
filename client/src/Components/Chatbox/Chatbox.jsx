import React from "react";

function Chatbox() {
  return(
    <div id="chat-box">
      <section className="user-buble">
        <div className="content">
          <p>Hi, I would like to order an iced mocha with whipped cream please</p>
        </div>
        <p className="ci">Confidence rating: 80%</p>
      </section>
      <p className="time">8:30 PM</p>
    </div>
  )
}

export default Chatbox;