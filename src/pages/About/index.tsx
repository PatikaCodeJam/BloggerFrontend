import React from "react";

type Props = {
  age?: number;
};

const About: React.FC<Props> = ({ age }) => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
