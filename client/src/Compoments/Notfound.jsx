import React from "react";
import notfound from "../images/404.svg";

export default function Notfoud() {
  return (
    <div className="notfound_container">
      <img src={notfound} alt="notfound" className="notfound_img" />
      <button className="goback_btn">Go back to Home</button>
    </div>
  );
}
