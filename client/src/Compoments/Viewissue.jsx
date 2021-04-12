import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
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

  const renderData = (value, index) => {
    return (
      <div key={index} className="row">
        <Card style={{ width: "18rem" }} className={`mycard ${value.priority}`}>
          <Card.Body>
            <Card.Title> Project Name :{value.projectname} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Issue Name : {value.issuename}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Priority: {value.priority}
            </Card.Subtitle>
            <Card.Text>Desc: {value.desc}</Card.Text>
            <Card.Link href="#" className="btn btn-danger">
              Card Link
            </Card.Link>
            <Card.Link href="#" className="btn btn-warning">
              Another Link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div className="view-area">{newinfo.map(renderData)}</div>;
};

export default Viewissue;
