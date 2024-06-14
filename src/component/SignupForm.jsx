import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import './SignupForm.css'; // Import the CSS file

const SignupForm = () => {
  return (
    <Container className="signup-container">
      <div className="signup-form">
        <img
          src="public/Logo.png" 
          alt="Logo"
          height="92px"
          width="92px"
        />
        <h2>Sign Up</h2>
        <div className="social-buttons">
          <Button variant="outline-danger">
            <FaGoogle /> 
          </Button>
          <Button variant="outline-primary">
            <FaFacebookF /> 
          </Button>
        </div>
        <div className="or-separator">OR</div>
        <Form>
          <Form.Group controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group controlId="formCheckbox" className="checkbox">
            <Form.Check type="checkbox" label="By creating an account you agree to the terms of use and our privacy policy." />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-2">
            Create Account
          </Button>
        </Form>
        <div className="login-link">
          Already have an account? <a href="#login">Log In</a>
        </div>
      </div>
      <img src="public/Illustration2.png" alt="Brand Image" className="img-fluid" />
    </Container>
  );
}

export default SignupForm;