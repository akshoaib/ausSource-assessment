import React from "react";

const Title = ({ size, content, varient, shadow, ...props }) => {
  console.log("bhgjg");
  const styleProps = {
    primary: "title-primary",
    secondary: "title-secondary",
    ternary: "title-ternary",
  };
  return (
    <>
      <h1
        className={`${styleProps[varient]} ${shadow && "shadow"} ${
          props.styles
        }`}
      >
        {content}
      </h1>
    </>
  );
};

export default Title;
