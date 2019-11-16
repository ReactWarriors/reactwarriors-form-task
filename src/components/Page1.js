import React from "react";
import Field from "./Field";

const Page1 = props => {
  const { appState } = props;
  return (
    <div className="form-group">
      <Field
        id="firstname"
        labelText="Firstname"
        type="text"
        placeholder="Enter firstname"
        name="firstname"
        value={appState.firstname}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        placeholder="Enter Lastname"
        name="lastname"
        value={appState.lastname}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.lastname}
      />
      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={appState.password}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.password}
      />
      <Field
        id="repeatPassword"
        labelText="Repeat Password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
        value={appState.repeatPassword}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.repeatPassword}
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
            checked={appState.gender === "male"}
            onChange={props.onChange}
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
            checked={appState.gender === "female"}
            onChange={props.onChange}
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
