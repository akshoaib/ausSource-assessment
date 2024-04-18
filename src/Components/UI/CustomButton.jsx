import React from "react";

const CustomButton = ({ text, varient, icon, styles }) => {
  const buttons = {
    primary: "button-primary",
    secondary: "button-secondary",
  };
  return (
    <>
      <button className={`${buttons[varient]} ${styles} custom-button`}>
        {icon && icon} {text}
      </button>
    </>
  );
};

export default CustomButton;
