import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Issue.css";

export default function Createissue() {
  const options = [
    {
      label: "High",
      value: "High",
    },
    {
      label: "Medium",
      value: "Medium",
    },
    {
      label: "Low",
      value: "Low",
    },
  ];
  const [data, setData] = useState({
    projectname: "",
    issuename: "",
    priority: "",
    desc: "",
  });

  const handleClick = () => {
    console.log(data.priority.value);
    console.log(data);
    alert();
  };

  const inputevent = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            onChange={inputevent}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Issue Name</Form.Label>
          <Form.Control
            type="text"
            name="issuename"
            placeholder="Issue Name"
            onChange={inputevent}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Priority</Form.Label>
          <Form.Control as="select" name="priority">
            <option value="High">High</option>
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
            onChange={inputevent}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
