import React from "react";
const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={`bg-white hover:bg-black hover:text-white rounded-lg text-xl active:scale-75 duration-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
