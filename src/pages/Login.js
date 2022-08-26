import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className="text-center text-truncate">Welcome Back</h1>
            <p className="text-center">Glad to see you again!</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account?
                <Link className="bg__link" to="/signup">
                  Signup
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
