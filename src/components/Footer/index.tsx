import React from "react";
import { Link } from "react-router-dom";
import Text from "../Text";

import "./styles.css";

import Github from "../../assets/github.png";
import Medium from "../../assets/medium.png";
import Slack from "../../assets/slack.png";
import Twitter from "../../assets/twitter.png";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img src="./images/back.png" alt="" />
          <Text size="xsmall">Copyright © | Himang</Text>
        </div>
        <div className="footer__right">
          <a href="https://www.github.com">
            <img src={Github} alt="" className="img" />
          </a>

          <a href="https://www.medium.com">
            <img src={Medium} alt="" className="img" />
          </a>

          <a href="https://www.twitter.com">
            <img src={Twitter} alt="" className="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
