import React from "react";
import Text from "../../components/Text";
import "./style.css";

const Detail: React.FC = () => {
  return (
    <div className="detail__container">
      <div className="detail__header">
        <div className="header__right">
          <div className="header__avatar"></div>
          <div className="header__name">
            <Text size="small">Name</Text>
          </div>
        </div>
        <div className="header__left">
          <Text size="xsmall">22/12/2022</Text>
        </div>
      </div>
      <div className="detail__title">
        <Text size="title">Title</Text>
      </div>
      <div className="detail__content">
        <Text size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ips Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
        </Text>
      </div>
    </div>
  );
};

export default Detail;
