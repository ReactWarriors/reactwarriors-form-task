import React from "react";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import FourthStep from "../FourthStep/FourthStep";
import StepsBox from "../StepsBox/StepsBox";

import countries from "../data/countries.js";
import cities from "../data/cities.js";
import FormControl from "../FormControl/FormControl";

export default class App extends React.Component {
  state = {
    currentStep: 1,
    values: {
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      email: "",
      phone: "",
      country: "",
      city: "",
      avatar: ""
    },
    selectedDefault: "",
    errors: {
      firstName: false,
      lastName: false,
      password: false,
      repeatPassword: false,
      gender: false,
      email: false,
      phone: false,
      country: false,
      city: false,
      avatar: false
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getOptionsItems = () => {
    const countriesNames = countries;
    return countriesNames.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getCitiesOptions = () => {
    const country = +this.state.country;
    return Object.entries(cities)
      .filter(n => n[1].country === country)
      .map(([id, city]) => (
        <option key={id} value={id}>
          {city.name}
        </option>
      ));
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = {};
    if (this.state.currentStep === 1) {
      if (this.state.values.firstName.length < 5) {
        errors.firstName = "Must be 5 characters or more";
      }
      if (this.state.values.lastName < 5) {
        errors.lastName = "Must be 5 characters or more";
      }
      if (this.state.values.password < 6) {
        errors.password = "Must be 6 characters or more";
      }
      if (
        this.state.values.password !== this.state.repeatPassword ||
        this.state.values.password === ""
      ) {
        errors.repeatPassword = "Must be equal password";
      }
    }
    if (this.state.currentStep === 2) {
      if (
        !this.state.values.email.includes("@") ||
        this.state.values.email.length < 8
      ) {
        errors.email = "Required";
      }
      if (
        !this.state.values.phone.includes("+") ||
        this.state.values.email.length < 9
      ) {
        errors.phone = "Required";
      }
      if (this.state.values.country === "") {
        errors.country = "No selected country";
      }
      if (this.state.values.city === "") {
        errors.city = "No selected city";
      }
    }
    if (this.state.currentStep === 3) {
      if (this.state.values.avatar === "") {
        errors.avatar = "Choose your avatar please";
      }
    }
    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {},
        currentStep: this.state.currentStep + 1
      });
      console.log("submit", this.state);
    }
  };

  onResetClick = () => {
    this.setState({
      currentStep: 1,
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      email: "",
      phone: "",
      country: "",
      city: "",
      selectedDefault: "",
      avatar: "",
      previuosButt: true
    });
  };

  onPreviousStep = e => {
    e.preventDefault();
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <StepsBox currentStep={this.state.currentStep} />
          {this.state.currentStep === 1 ? (
            <FirstStep
              errors={this.state.errors}
              onChange={this.onChange}
              values={this.state.values}
            />
          ) : null}
          {this.state.currentStep === 2 ? (
            <SecondStep
              getOptionsItems={this.getOptionsItems}
              getCityOptions={this.getCityOptions}
              selectedDefault={this.state.selectedDefault}
              getCitiesOptions={this.getCitiesOptions}
              errors={this.state.errors}
              onChange={this.onChange}
              values={this.state.values}
            />
          ) : null}

          {this.state.currentStep === 3 ? (
            <ThirdStep
              values={this.state.values}
              onChange={this.onChange}
              errors={this.state.errors}
            />
          ) : null}

          {this.state.currentStep === 4 ? (
            <FourthStep
              values={this.state.values}
              onResetClick={this.onResetClick}
            />
          ) : null}

          {this.state.currentStep < 4 ? (
            <FormControl
              currentStep={this.state.currentStep}
              onPreviousStep={this.onPreviousStep}
              onClickSubmit={this.onSubmit}
            />
          ) : null}
        </form>
      </div>
    );
  }
}
