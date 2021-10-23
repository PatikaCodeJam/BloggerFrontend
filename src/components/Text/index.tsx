import React from "react";

import "./style.css";

type TextStyle = "small" | "medium" | "large" | "title";

type Props = {
  size: TextStyle;
};

const Text: React.FC<Props> = ({ size, children, ...props }) => {
  return (
    <p className={size} {...props}>
      {children}
    </p>
  );
};

export default Text;
