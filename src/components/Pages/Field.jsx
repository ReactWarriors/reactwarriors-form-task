import React from "react";

const Field = props => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    errors
  } = props;
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback text-center">{errors}</div>}
    </div>
  );
};

export default Field;
