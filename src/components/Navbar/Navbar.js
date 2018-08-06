import React from "react";
import "./Navbar.css";

const Navbar = props => (
  
  <nav>
    <ul>
      <li className="nav nav nav-justified">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw"><span style ={{color: "red"}}>{props.message}</span></li>

      <li>Score: <span style={{color: "purple"}}>{props.score}</span> | Top Score: {props.topScore} </li>

    </ul>
  </nav>

  
);

export default Navbar;