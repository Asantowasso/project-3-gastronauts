import React, { useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";

import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import Sidebar from './Navbar';

function SignupForm(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log("event:",event)
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // check if form has everything (as per react-bootstrap docs)
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      setFormState({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Sidebar/>
      <Form noValidate validated={false} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={formState.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(formState.username && formState.email && formState.password)
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignupForm;
