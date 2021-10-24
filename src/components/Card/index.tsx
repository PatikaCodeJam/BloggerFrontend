import React from "react";
import Text from "../Text";
import "./style.css";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__top">
        <div className="card__top__right">
          <div className="card__avatar"></div>
          <div className="card__name">
            <Text size="small">Name</Text>
          </div>
        </div>
        <div className="card__top__left">
          <Text size="xsmall">22/12/2022</Text>
        </div>
      </div>
      <div className="card__title">
        <Text size="title">Title</Text>
      </div>
      <div className="card__bottom">
        <div className="card__tag">
          <Text size="xsmall">#tag</Text>
        </div>
        <div className="card__tag">
          <Text size="xsmall">#tag</Text>
        </div>
        <div className="card__tag">
          <Text size="xsmall">#tag</Text>
        </div>
        <div className="card__tag">
          <Text size="xsmall">#tag</Text>
        </div>
      </div>
    </div>
  );
};

export default Card;
