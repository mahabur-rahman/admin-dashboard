import React from "react";
// scss
import "./form.scss";
// react bootstrap
import { Card, Col, Row, Form, Button } from "react-bootstrap";

const MessageField = () => {
  return (
    <>
      <section className="contact_form">
        <Card className="shadow px-2 pb-4 border-0">
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="email">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control as="textarea" rows={6} placeholder="Message" />
              </Form.Group>
              {/* submit btn */}
              <div className="text-center mt-4">
                <Button className="submit_btn" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default MessageField;
