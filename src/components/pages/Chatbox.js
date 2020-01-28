import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Chatbox = () => {

function openForm() {
document.getElementById("myForm").style.display = "block";
}
      
function closeForm() {
document.getElementById("myForm").style.display = "none";
}
return (

<div className="chat-popup" id="myForm">
  <form action="/action_page.php" className="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Viesti</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" className="btn">Lähetä</button>
    <button type="button" className="btn cancel" onclick="closeForm()">Sulje</button>
  </form>
</div>
)}

export default Chatbox;