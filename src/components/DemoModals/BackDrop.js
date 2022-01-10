import React, { useState } from "react";
// react bootstrap
import { Modal, Button } from "react-bootstrap";

const BackDrop = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalText =
    "Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.";

  return (
    <>
      <p className="px-3" style={{ fontSize: "1rem" }}>
        You can disable the backdrop by adding
        <span className="text-danger"> data-bs-backdrop="false" </span> to
        <span className="text-danger"> .modal-dialog </span> to vertically
        center the modal.
      </p>

      <Button
        variant="primary"
        onClick={handleShow}
        className="w-50 mb-3 mx-3 p-2"
      >
        Launch Modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Disabled Backdrop</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BackDrop;
