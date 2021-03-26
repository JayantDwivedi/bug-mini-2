import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <img src="../../public/bug.png" alt="bug png" />

      <h1 className="headingname">Bug Tracker</h1>

      <a href="https://www.google.com" className="link-button">
        Login
      </a>
      <a href="https://www.google.com" className="link-button">
        SignUp
      </a>
    </div>
  );
}
