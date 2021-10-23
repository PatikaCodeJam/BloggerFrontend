import React from "react";

type Props = {
  age: number;
};

const Detail: React.FC<Props> = ({ age }) => {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;
