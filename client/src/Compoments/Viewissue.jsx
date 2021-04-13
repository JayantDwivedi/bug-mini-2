import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/Issue.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Viewissue = () => {
  const [data, setData] = useState({
    info: [],
  });

  const getData = () => {
    axios.get("http://localhost:5000/viewissue").then((result) => {
      setData({ info: result.data });
      // console.log(result.data);
      // console.log("use effect called");
      // console.log(data.info);
    });
  };

  useEffect(() => {
    // console.log("use effect called");
    getData();
  }, []);

  const newinfo = data.info.map((value) => {
    return value;
  });

  // const issuename = newinfo.map((value) => {
  //   return value.issuename;
  // });

  // console.log(issuename);

  // Function to delete particular record from db
  const handleDelete = (id) => {
    alert("Record Deleted");
    axios.delete(`http://localhost:5000/viewissue/${id}`).then((res) => {
      console.log(res);
      window.location = "/viewissue";
    });
  };

  // Bootstrap models function and state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    console.log("clicked");
  };

  const renderData = (value, index) => {
    return (
      <>
        <Card key={index} className={`mycards ${value.priority}`}>
          <Card.Body>
            <Card.Title> Project Name :{value.projectname} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Issue Name : {value.issuename}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Priority: {value.priority}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Description: {value.desc}
            </Card.Subtitle>

            <button
              className="btn btn-danger mybutton"
              onClick={() => {
                handleDelete(value._id);
              }}
            >
              Delete
            </button>
            <Button variant="warning" onClick={handleShow} className="mybutton">
              Update
            </Button>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bugs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return <div className="view-area">{newinfo.map(renderData)}</div>;
};

export default Viewissue;
