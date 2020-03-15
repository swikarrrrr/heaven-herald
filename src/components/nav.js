import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="topheading">
          <center>
            <img class="logo" src={require("../images/logo.png")} />
          </center>
        </div>
        <div class="secondheading">
          <Link to="/">
            <a>
              <h2>raila</h2>
            </a>
          </Link>
          <Link to="/assign">
            <a>
              <h2>assignments</h2>
            </a>
          </Link>
          <Link to="/confess">
            <a>
              <h2>confess</h2>
            </a>
          </Link>
        </div>
        <div class="mainpic">
          <h1>WELCOME TO HERALD HEAVEN</h1>
        </div>
        <div class="news">
          <marquee
            direction="right"
            scrollamount="3"
            behavior="scroll"
            onmouseover="this.stop()"
            onmouseout="this.start()"
          >
            <a href="#">
              PSEUDOCODE UPLOADED ! ! DATABASE WEEK 2 QUESTION WITH ANSWER
              UPLOADED IN ASSIGNMENT ! !
            </a>
          </marquee>
        </div>
      </div>
    );
  }
}

export default Nav;
