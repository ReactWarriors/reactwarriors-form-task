import React from "react";

const Check = props => {
  const {
    id,
    labelText,
    type,
    name,
    value,
    checked,
    onChange,
    error
  } = props;
  return (
    <div className="form-check">
      <input
        id={id}
        type={type}
        className="form-check-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label">{labelText}</label>
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default Check;
