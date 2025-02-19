import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NotFound() {
  return (
    <Container>
      <Row>
        <Col className="mt-5 text-center">
          <h1 className="display-6">Page not found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
