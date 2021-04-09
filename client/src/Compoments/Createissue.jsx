import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Issue.css";

export default function Createissue() {
  const [data, setData] = useState({
    projectname: "",
    issuename: "",
    priority: "High",
    desc: "",
  });

  const handleClick = () => {
    // console.log(data.priority.value);
    console.log(data);
    alert();
  };

  return (
    <div className="createissue-form">
      <Form onSubmit={handleClick}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            name="projectname"
            placeholder="Project Name"
            onChange={(e) => {
              setData({ ...data, projectname: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Issue Name</Form.Label>
          <Form.Control
            type="text"
            name="issuename"
            placeholder="Issue Name"
            onChange={(e) => {
              setData({ ...data, issuename: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setData({ ...data, priority: e.target.value });
            }}
          >
            <option>High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Control>
          {/* <select name="priority">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} */}
          {/* </select> */}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>

          <Form.Control
            as="textarea"
            name="desc"
            rows={4}
            placeholder="Description"
            onChange={(e) => {
              setData({ ...data, desc: e.target.value });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
