import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './PasswordReset.css'; 

const PasswordReset = () => {
  return (
    <Container className="password-reset-container d-flex justify-content-center align-items-center">
      <div className="password-reset-form">
        <img
          src="/Logo.png" 
          alt="Logo"
          className="password-reset-logo mb-4"
        />
        <div className="password-reset-title mb-4">RECOVER</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit" className="password-reset-button mt-3 w-100">
            Reset Your Password
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default PasswordReset;
