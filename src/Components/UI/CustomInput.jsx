import React from "react";
import Text from "./Text";

const CustomInput = ({
  onChange,
  varient,
  error,
  onBlur,
  touched,
  ...props
}) => {
  const inputs = {
    primary: "input-primary",
    secodary: "input-secondary",
  };
  return (
    <>
      <div className="d-flex flex-column gap-2">
        {props?.label && <label>{props?.label}</label>}
        <input
          {...props}
          onBlur={onBlur}
          className={`${inputs[varient]}`}
          onChange={onChange}
        />
        {touched && error && (
          <Text styles="text-danger" content={<>{error}</>} />
        )}
      </div>
    </>
  );
};

export default CustomInput;
