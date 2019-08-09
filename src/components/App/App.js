import React from "react";
import Field from "../Field/Field";

export default class App extends React.Component {
  state = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    gender: "male",
    errors: {
      firstName: false,
      lastName: false,
      password: false,
      repeatPassword: false,
      gender: false
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = {};
    if (this.state.firstName.length < 5) {
      errors.firstName = "Must be 5 characters or more";
    }
    if (this.state.lastName < 5) {
      errors.lastName = "Must be 5 characters or more";
    }
    if (this.state.password < 6) {
      errors.password = "Must be 6 characters or more";
    }
    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {},
        stepOne: false,
        stepTwo: true,
      });
      console.log("submit", this.state);
    }
  };

  previousButtonTest = e => {
    e.preventDefault();
    this.setState({
      stepOne: true,
      stepTwo: false,
    });
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          {this.state.stepOne ? (
            <div className="firstStepWrapp">
              <Field
                id="firstName"
                labelText="First name"
                type="text"
                placeholder="Enter your name"
                name="firstName"
                value={this.state.firstName}
                error={this.state.errors.firstName}
                onChange={this.onChange}
              />
              <Field
                id="lastName"
                labelText="Last name"
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={this.state.lastName}
                error={this.state.errors.lastName}
                onChange={this.onChange}
              />
              <Field
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                value={this.state.password}
                error={this.state.errors.password}
                onChange={this.onChange}
              />
              <Field
                id="repeatPassword"
                labelText="Repeat password"
                type="password"
                placeholder="Repeat password"
                name="repeatPassword"
                value={this.state.repeatPassword}
                error={this.state.errors.repeatPassword}
                onChange={this.onChange}
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
                    checked={this.state.gender === "male"}
                    onChange={this.onChange}
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
                    checked={this.state.gender === "female"}
                    onChange={this.onChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </fieldset>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light mr-3" disabled>
                  Previous
                </button>
                <button
                  className="btn btn-secondary"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="secondStepWrapp">
              <p>Step 2</p>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light mr-3" onClick={this.previousButtonTest} >
                  Previous
                </button>
                <button className="btn btn-secondary" type="button" >
                  Next
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}
