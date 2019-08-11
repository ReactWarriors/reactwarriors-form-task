import React from "react";
import Field from "../Field/Field";

export default class FirstStep extends React.Component {
  render() {
    const {
      firstName,
      errorFirstName,
      onChange,
      lastName,
      errorLastName,
      password,
      errorPassword,
      repeatPassword,
      errorRepeatPassword,
      checkedGender,
    } = this.props;
    return (
      <div className="firstStepWrapp">
        <Field
          id="firstName"
          labelText="First name"
          type="text"
          placeholder="Enter your name"
          name="firstName"
          value={firstName}
          error={errorFirstName}
          onChange={onChange}
        />
        <Field
          id="lastName"
          labelText="Last name"
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={lastName}
          error={errorLastName}
          onChange={onChange}
        />
        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          error={errorPassword}
          onChange={onChange}
        />
        <Field
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          error={errorRepeatPassword}
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
              checked={checkedGender === "male"}
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
              checked={checkedGender === "female"}
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
