import React from "react";

const TopText = (props) => {
  return (
    <header
      style={{
        transform: "skew(-20deg)",
      }}
      className="text-center text-3xl font-medium text-[#e4cba4] bg-[#317875f8] p-4 w-2/6 rounded-md mx-auto mb-8"
    >
      {props.title}
    </header>
  );
};

export default TopText;
