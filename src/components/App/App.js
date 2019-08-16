import React from "react";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import FourthStep from "../FourthStep/FourthStep";
import StepsBox from "../StepsBox/StepsBox";

import countries from "../data/countries.js";
import cities from "../data/cities.js";

export default class App extends React.Component {
  state = {
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
    defaultAvatar:
      "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
    avatar: "",
    previuosButt: true,
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
    },
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
      .map(([ id, city ]) => (
        <option key={id} value={id}>
          {city.name}
        </option>
      ));
  };

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
    };
    reader.readAsDataURL(event.target.files[0]);
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
    if (
      this.state.password !== this.state.repeatPassword ||
      this.state.password === ""
    ) {
      errors.repeatPassword = "Must be equal password";
    }
    if (this.state.currentStep === 2) {
      if (!this.state.email.includes("@") || this.state.email.length < 8) {
        errors.email = "Required";
      }
      if (!this.state.phone.includes("+") || this.state.email.length < 9) {
        errors.phone = "Required";
      }
      if (this.state.country === "") {
        errors.country = "No selected country";
      }
      if (this.state.city === "") {
        errors.city = "No selected city";
      }
    }

    if (this.state.currentStep === 3) {
      if (this.state.avatar === "") {
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
        currentStep: this.state.currentStep + 1,
        previuosButt: false
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
      defaultAvatar:
        "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
      avatar: "",
      previuosButt: true,
    })
  }

  previousButtonTest = e => {
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
              firstName={this.state.firstName}
              errorFirstName={this.state.errors.firstName}
              onChange={this.onChange}
              lastName={this.state.lastName}
              errorLastName={this.state.errors.lastName}
              password={this.state.password}
              errorPassword={this.state.errors.password}
              repeatPassword={this.state.repeatPassword}
              errorRepeatPassword={this.state.errors.repeatPassword}
              checkedGender={this.state.gender}
              onClickSubmit={this.onSubmit}
            />
          ) : null}
          {this.state.currentStep === 2 ? (
            <SecondStep
              email={this.state.email}
              errorEmail={this.state.errors.email}
              phone={this.state.phone}
              errorPhone={this.state.errors.phone}
              onChange={this.onChange}
              getOptionsItems={this.getOptionsItems}
              getCityOptions={this.getCityOptions}
              selectedDefault={this.state.selectedDefault}
              country={this.state.country}
              errorCountry={this.state.errors.country}
              city={this.state.city}
              errorCity={this.state.errors.city}
              getCitiesOptions={this.getCitiesOptions}
            />
          ) : null}

          {this.state.currentStep === 3 ? (
            <ThirdStep
              avatar={this.state.avatar}
              onChangeAvatar={this.onChangeAvatar}
              defaultAvatar={this.state.defaultAvatar}
              errorAvatar={this.state.errors.avatar}
            />
          ) : null}

          {this.state.currentStep === 4 ? (
            <FourthStep
              avatar={this.state.avatar}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.lastName}
              phone={this.state.phone}
              country={this.state.country}
              city={this.state.city}
              onResetClick={this.onResetClick}
            />
          ) : null}

          {this.state.currentStep < 4 ? (
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-light mr-3"
                disabled={this.state.previuosButt}
                onClick={this.previousButtonTest}
              >
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
          ) : null}
        </form>
      </div>
    );
  }
}
