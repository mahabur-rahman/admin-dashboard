import React, { useState } from "react";
// react bootstrap
import { Modal, Button } from "react-bootstrap";

const Example = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-25 mb-3 mx-3">
        Basic Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Non omnis incidunt qui sed occaecati magni asperiores est mollitia.
          Soluta at et reprehenderit. Placeat autem numquam et fuga numquam.
          Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet
          incidunt est facilis. Dolorem neque recusandae quo sit molestias sint
          dignissimos.
        </Modal.Body>
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

export default Example;
