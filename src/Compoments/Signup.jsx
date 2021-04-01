import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../styles/Signin.css";

export default function Signup() {
  return (
    <div className="signup-form">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="email" placeholder="Enter Employee Id" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone no</Form.Label>
          <Form.Control type="email" placeholder="Enter Phone no" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
