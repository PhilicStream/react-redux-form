import React from "react";

const FormField = (props) => {
  return (
    <div className="mb-3">
      <label>{props.label}</label>
      <input
        type={props.type}
        className={props.inputClassName}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormField;
