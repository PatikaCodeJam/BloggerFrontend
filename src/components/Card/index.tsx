import React from "react";
import Text from "../Text";
import "./style.css";
type Props = {
  name?: string;
  date?: any;
  title?: string;
};

const Card: React.FC<Props> = ({ name, date, title }) => {
  return (
    <div className="card__container">
      <div className="card__top">
        <div className="card__top__right">
          <div className="card__avatar"></div>
          <div className="card__name">
            <Text size="small">{name}</Text>
          </div>
        </div>
        <div className="card__top__left">
          <Text size="xsmall">{date}</Text>
        </div>
      </div>
      <div className="card__title">
        <Text size="title">{title}</Text>
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
