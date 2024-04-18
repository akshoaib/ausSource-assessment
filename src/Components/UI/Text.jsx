import React from "react";

const Text = ({ content, varient = "primary", icon, iconColor, ...props }) => {
  const styleProps = {
    primary: "text-primary",
    secondary: "text-secodary",
  };
  return (
    <>
      <p
        className={`d-flex align-items-center gap-2 ${styleProps[varient]}  ${props.styles}`}
      >
        <span className={`${iconColor && "p-icon"}`}>{icon}</span>
        {content}
      </p>
    </>
  );
};

export default Text;
