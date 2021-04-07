import React from "react";
import "../styles/Header.css";
import header from "../images/bug.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-header">
      <Link to="/">
        <img src={header} alt="bug png" className="header_icon" />
      </Link>

      <Link to="/" className="link-heading">
        <h1 className="headingname">Bug Tracker</h1>
      </Link>

      <Link to="/viewissue" className="link-button">
        View Issues
      </Link>
      <Link to="/createissue" className="link-button">
        Create Issues
      </Link>
    </div>
  );
}
