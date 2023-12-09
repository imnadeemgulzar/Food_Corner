import React from "react";

const TopText = (props) => {
  return (
    <header
      style={{
        transform: "skew(-20deg)",
        backgroundImage: " linear-gradient(#2D5E2E,#98BC62)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "currentColor",
      }}
      className="text-5xl text-transparent font-bold text-center leading-[60px] my-8"
    >
      {props.title}
    </header>
  );
};

export default TopText;
