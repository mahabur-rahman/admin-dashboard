import React from "react";
// scss
import "./error.scss";
// react router dom
import { Link, useHistory } from "react-router-dom";
// react bootstrap
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// img
import errorImg from "../../images/error.svg";

const NotFound = () => {
  const history = useHistory();

  // redirect to home page
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <section id="notFound">
        <Container fluid>
          <Row className="text-center">
            <Col xl={6} className="mx-auto">
              <div className="error_content">
                <h2 className="no_text">404</h2>
                <h3 className="notExist_title">
                  The page you are looking for doesn't exist.
                </h3>
                <Button onClick={handleClick} className="back_Btn">
                  Back to home
                </Button>
                <div className="error_img my-5">
                  <Image src={errorImg} fluid alt="404 Page" />
                </div>
              </div>

              {/* footer part */}

              <p className="mb-0">
                Designed by <Link to="/">BootstrapMade</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
