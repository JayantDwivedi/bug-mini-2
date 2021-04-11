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
      // console.log(result.data);
      setData({ info: result.data });
      console.log("use effect called");
      console.log(data.info);
    });
  };

  useEffect(() => {
    // console.log("use effect called");
    getData();
  }, []);

  // console.log(data.info[1].projectname);

  // console.log(result.data);

  const newinfo = data.info.map((value) => {
    return value;
  });
  console.log(newinfo);

  return (
    // <div className="view-area">
    //   {data.info.map((value) => {
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Body>
    //         <Card.Title> Project Name : {value.projectname} </Card.Title>
    //         <Card.Subtitle className="mb-2 text-muted">
    //           Issue Name : {value.issuename}
    //         </Card.Subtitle>
    //         <Card.Subtitle className="mb-2 text-muted">
    //           Priority: {value.priority}
    //         </Card.Subtitle>
    //         <Card.Text>Desc:{value.desc}</Card.Text>
    //         <Card.Link href="#" className="btn btn-danger">
    //           Card Link
    //         </Card.Link>
    //         <Card.Link href="#" className="btn btn-warning">
    //           Another Link
    //         </Card.Link>
    //       </Card.Body>
    //     </Card>;
    //   })}
    // </div>

    <div className="view-area">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="high">
          <Card.Title> Project Name : </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Issue Name :
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Priority:</Card.Subtitle>
          <Card.Text>Desc:</Card.Text>
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

export default Viewissue;
