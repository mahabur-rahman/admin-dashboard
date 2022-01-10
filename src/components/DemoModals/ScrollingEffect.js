import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ScrollingEffect() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   text
  const text =
    "Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at  reprehenderit. Placeat autem numquam et fuga numquam. Tempora  facere consequatur sit dolor ipsum. Consequatur nemo amet incidu est facilis. Dolorem neque recusandae quo sit molestias si dignissimos. Non omnis incidunt qui sed occaecati magni asperior est mollitia. Soluta at et reprehenderit. Placeat autem numquam  fuga numquam. Tempora in facere consequatur sit dolor ipsu Consequatur nemo amet incidunt est facilis. Dolorem neq recusandae quo sit molestias sint dignissimos. Non omnis incidu qui sed occaecati magni asperiores est mollitia. Soluta at  reprehenderit. Placeat autem numquam et fuga numquam. Tempora   facere consequatur sit dolor ipsum. Consequatur nemo amet incidu est facilis. Dolorem neque recusandae quo sit molestias si  dignissimos.";

  return (
    <>
      <div>
        <p className="px-3" style={{ fontSize: "1rem" }}>
          When modals become too long for the user’s viewport or device, they
          scroll independent of the page itself. You can also create a
          scrollable modal that allows scroll the modal body by adding
          <span className="text-danger"> .modal-dialog-scrollable </span>to
          <span className="text-danger">.modal-dialog</span>
        </p>
        <Button variant="primary" onClick={handleShow} className="mx-3">
          Scrolling Modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog scrollable="true">
            <Modal.Header closeButton>
              <Modal.Title>Scrolling Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </>
  );
}

export default ScrollingEffect;
