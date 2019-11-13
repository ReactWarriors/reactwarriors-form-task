import React from "react";
import Field from "./Field";

const Page1 = props => {
  return (
    <div className="form-group">
      <Field
        id="firstname"
        labelText="Firstname"
        type="text"
        placeholder="Enter firstname"
        name="firstname"
      />
      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        placeholder="Enter Lastname"
        name="lastname"
      />
      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
      />
      <Field
        id="repeatPassword"
        labelText="Repeat Password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
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
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Page1;
