import React from "react";
import "./Navbar.css";

const Navbar = props => (
  
  <nav>
    <ul>
      <li className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw"><span style ={{color: "red"}}>{props.message}</span></li>

      <li>Score: <span style={{color: "purple"}}>{props.score}</span> | Top Score: {props.topScore}</li>

      {/* <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li> */}
    </ul>
  </nav>

  
);

export default Navbar;