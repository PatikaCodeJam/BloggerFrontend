import React from "react";

type Props = {
  title?: string | number;
};

const Home: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
