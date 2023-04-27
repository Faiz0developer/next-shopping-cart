import React from "react";
const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={`bg-white rounded-lg text-xl ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
