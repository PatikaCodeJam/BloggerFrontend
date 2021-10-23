import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

import Text from "../Text";

const Navigaton = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">
          <Text size="large">CodeJam</Text>
        </Link>
      </div>
      <div className="nav__right">
        <span className="nav__item">
          <Link to="/home">
            <Text size="medium">Home</Text>
          </Link>
        </span>
        <span className="nav__item">
          <Link to="/about">
            <Text size="medium">About</Text>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navigaton;
