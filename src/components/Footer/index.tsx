import React from "react";

import Text from "../Text";

import "./styles.css";

import Deneme from "../../images/deneme.png";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img src="./images/back.png" alt="" />
          <Text size="small">Copyright © | Himang</Text>
        </div>
        <img src="./GithubLogo.png" alt="" className="img" />
        <div className="footer__right">
          <Text size="small">Copyright</Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
