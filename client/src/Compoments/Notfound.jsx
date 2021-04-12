import React from "react";
import notfound from "../images/404.svg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Notfoud() {
  return (
    <div className="notfound_container">
      <img src={notfound} alt="notfound" className="notfound_img" />
      <Link to="/" className="btn-getstarted">
        Go to Home
      </Link>
    </div>
  );
}
