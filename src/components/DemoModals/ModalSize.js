import React, { useState } from "react";
// react bootstrap
import { Modal, Button } from "react-bootstrap";

const ModalSize = () => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <p className="px-3" style={{ fontSize: "1rem" }}>
        Modals have three optional sizes, available via modifier classes to be
        placed on a <span className="text-danger">.modal-dialog.</span> These
        sizes kick in at certain breakpoints to avoid horizontal scrollbars on
        narrower viewports..
      </p>
      {values.map((v, idx) => (
        <>
          <Button
            key={idx}
            className="w-50 mb-2 mx-3"
            onClick={() => handleShow(v)}
          >
            Full screen
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        </>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSize;
