import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeCompo.css"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3 className="title">Quiz App</h3>
        <Link to="/quiz">
          <button className="play-button">Play</button>
        </Link>
      </div>
    );
  }
}

export default Home;