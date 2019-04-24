import React from "react";

const Check = props => {
  const {
    id,
    labelText,
    type,
    name,
    value,
    checked,
    defaultChecked,
    onCheck,
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
        onClick={onCheck}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default Check;
