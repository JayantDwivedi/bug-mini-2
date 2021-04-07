import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Issue.css";

export default function Createissue() {
  const [projectname, setprojectname] = useState("");
  const [issuename, setissuename] = useState("");
  const [priority, setpriority] = useState("");
  const [Description, setDescription] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({
    projectname: "",
    issuename: "",
    priority: "",
    Description: "",
    password: "",
  });

  const handleChange = () => {
    setData({
      projectname: projectname,
      issuename: issuename,
      priority: priority,
      Description: Description,
      password: password,
    });

    alert(data.projectname);

    setprojectname("");
    setissuename("");
    setpriority("");
    setPassword("");
  };

  return (
    <div className="createissue-form">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            // value={projectname}
            onChange={(e) => setprojectname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            // value={issuename}
            onChange={(e) => setissuename(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>priority</Form.Label>
          <Form.Control
            type="text"
            placeholder="priority"
            // value={priority}
            onChange={(e) => setpriority(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Description"
            // value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleChange}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
