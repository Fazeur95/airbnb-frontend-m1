import React from "react";

const Index = ({ title, handleClick, type, btnClass }) => {
  return (
    <button onClick={handleClick} type={type} className={btnClass}>
      {title}
    </button>
  );
};

export default Index;
