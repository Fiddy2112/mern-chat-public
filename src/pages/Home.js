import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the chat in you friends 💌</h1>
          <p>CHat App lets you connect with friends around the world</p>
        </div>
        <LinkContainer to="/chat">
          <Button variant="success">
            Get Started
            <i className="fas fa-comment home-message-icon"></i>
          </Button>
        </LinkContainer>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
