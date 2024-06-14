

import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import './LoginForm.css'; 

const LoginForm = () => {
  return (
    <Container className="form-container">
      <Row className="justify-content-md-center w-100">
        <Col md={6} className="form-content">
        <img src="/Logo.png" alt="Brand Image" className="brand-image" />
          <h2 className="text-center mb-4">Login</h2>
          <Row className="text-center mb-4">
            <Col>
              <Button variant="outline-danger" className="w-100 mb-2">
                <FaGoogle /> Google
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary" className="w-100 mb-2">
                <FaFacebookF /> Facebook
              </Button>
            </Col>
          </Row>
          <h5 className="text-center mb-3">OR</h5>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mt-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-4 mb-2">
              Login
            </Button>

            <div className="d-flex justify-content-between mt-3">
              <a href="#reset-password">Forgot password?</a>
              <a href="#create-account">Create new account</a>
            </div>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src="public/Illustration.png" alt="Brand Image" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
