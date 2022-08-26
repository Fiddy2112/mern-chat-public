import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import "./Signup.css";

const validateImg = (e) => {
  if (e.target.files && e.target.files[0]) {
    this.setState({
      image: e.target.files[0],
    });
    e.target.value = null;
  }
};

function Signup() {
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className="text-center">Create account</h1>
            <div className="signup-profile-pic__container">
              <img src={avatar} className="signup-profile-pic" alt="avatar" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpg, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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
              Create account
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account?
                <Link className="bg__link" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
}

export default Signup;
