import React from "react";
import Field from "../Field";

const Basic = props => {
  const { value, errors, onChange } = props;
  return (
    <div className="form-group">
      <Field
        id="firstname"
        labelText="Firstname"
        type="text"
        placeholder="Enter firstname"
        name="firstname"
        value={value.firstname}
        onChange={onChange}
        error={errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        placeholder="Enter Lastname"
        name="lastname"
        value={value.lastname}
        onChange={onChange}
        error={errors.lastname}
      />
      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={value.password}
        onChange={onChange}
        error={errors.password}
      />
      <Field
        id="repeatPassword"
        labelText="Repeat Password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
        value={value.repeatPassword}
        onChange={onChange}
        error={errors.repeatPassword}
      />
      <fieldset className="form-group">
        <div>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={value.gender === "male"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={value.gender === "female"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Basic;
