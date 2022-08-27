import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./ChatForm.css";

function ChatForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter message..." />
            </Form.Group>
          </Col>
          <Col md={1} style={{ paddingLeft: 0 }}>
            <Button variant="primary" type="submit">
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ChatForm;
