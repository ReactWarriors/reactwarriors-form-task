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
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        className="form-control"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default Check;
