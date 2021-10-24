import React from "react";
import Text from "../Text";
import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination__container">
      <button className="pagination__btn">
        <Text size="small"> Previous </Text>
      </button>
      <button className="pagination__btn">
        <Text size="small"> Next </Text>
      </button>
    </div>
  );
};

export default Pagination;
