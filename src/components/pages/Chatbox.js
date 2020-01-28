import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Chatbox = () => {


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id="chatbutton" variant="primary" onClick={handleShow}>
        Aloita chat
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="example-modal-sizes-title-sm"
        animation={true}
        centered={true}

        scrollable={true}



      >
        <Modal.Header closeButton>
          <Modal.Title>Asukasportaalin chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
          Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
           Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
           Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
           Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
           Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa.
           Olet nyt chatissa. Olet nyt chatissa. Olet nyt chatissa. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Poistu chatista
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Lähetä
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chatbox;
