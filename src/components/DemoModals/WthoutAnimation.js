import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const WithOutAnimation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <p className="px-3" style={{ fontSize: "1rem" }}>
          For modals that simply appear rather than fade in to view, remove the
          <span className="text-danger">.fade</span> class from your
          <span className="text-danger">.modal</span>
          element
        </p>
        <Button variant="primary" onClick={handleShow} className="mx-3">
          Disabled Animation Modal
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default WithOutAnimation;
