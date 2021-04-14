import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.svg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="main_header">
      <main className="heading">
        <p className="para">Catch all the Bugs</p>
        <br />
        <p className="para">Collaborate with your team</p>
        <Link to="/createissue">
          <button className="btn-getstarted">Get Started</button>
        </Link>
      </main>
      <img src={home} alt="home" className="home-img" />
    </div>
  );
}
