import React from "react";

const Field = props => {
  const {
    labelText,
    type,
    placeholder,
    name,
    values,
    onChange,
    errors
  } = props;
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input
        value={values}
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback text-center">{errors}</div>}
    </div>
  );
};

export default Field;
