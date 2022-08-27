import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChatForm from "../components/ChatForm";
import Sidebar from "../components/Sidebar";

function Chat() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <ChatForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
