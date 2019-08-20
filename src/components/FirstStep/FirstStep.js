import React from "react";
import Field from "../Field/Field";

export default class FirstStep extends React.Component {
  render() {
    const {
      values,
      errors,
      onChange
    } = this.props;
    return (
      <div className="firstStepWrapp">
        <Field
          id="firstName"
          labelText="First name"
          type="text"
          placeholder="Enter your name"
          name="firstName"
          value={values.firstName}
          error={errors.firstName}
          onChange={onChange}
        />
        <Field
          id="lastName"
          labelText="Last name"
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={values.lastName}
          error={errors.lastName}
          onChange={onChange}
        />
        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          error={errors.password}
          onChange={onChange}
        />
        <Field
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          error={errors.repeatPassword}
          onChange={onChange}
        />
        <fieldset className="form-group">
          <p>Gender</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={values.gender === "male"}
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
              checked={values.gender === "female"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}
