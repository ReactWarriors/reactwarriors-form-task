import React from "react";
import TabsContainer from "./TabsContainer";
import Basic from "./steps/Basic";
import Main from "./steps/Main";
import Avatar from "./steps/Avatar";
import Last from "./steps/Last";
import Buttons from "./Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      page: 1,
      value: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        email: "",
        mobile: "",
        country: "Select country",
        city: "Select city",
        gender: "female",
        avatar: ""
      },

      errors: {}
    };
    this.state = this.initialState;
  }

  getErrors = () => {
    const { page, value } = this.state;
    const errors = {};
    const emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const mobileReg = /^\d+$/;

    switch (page) {
      case 1:
        if (value.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }

        if (value.lastname.length < 5) {
          errors.lastname = "Must be 5 characters or more";
        }

        if (value.password < 3) {
          errors.password = "Must be 3 characters or more";
        }

        if (value.password !== value.repeatPassword) {
          errors.repeatPassword = "Must be equal password";
        }
        break;
      case 2:
        if (!emailReg.test(value.email)) {
          errors.email = "Ivalid email";
        }
        if (!mobileReg.test(value.mobile)) {
          errors.mobile = "Invalid mobile";
        }
        if (value.country === "Select country") {
          errors.country = "Select country";
        }
        if (value.city === "Select city") {
          errors.city = "Select city";
        }
        break;
      case 3:
        if (!value.avatar) {
          errors.avatar = "Choose image";
        }
        break;
      default:
        break;
    }

    return errors;
  };

  nextPage = event => {
    event.preventDefault();
    const errors = this.getErrors();

    if (Object.keys(errors).length) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState(state => ({
        page: state.page + 1,
        errors: {}
      }));
    }
  };

  previousPage = event => {
    event.preventDefault();
    this.setState(state => ({
      page: state.page - 1
    }));
  };

  onReset = event => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  onChange = event => {
    event.persist();
    this.setState(state => ({
      value: {
        ...state.value,
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    const { value, page, errors, steps } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <TabsContainer page={page} steps={steps} />
          {this.state.page === 1 && (
            <Basic onChange={this.onChange} value={value} errors={errors} />
          )}
          {this.state.page === 2 && (
            <Main
              getOptionsItems={this.getOptionsItems}
              getOptionsItemsCities={this.getOptionsItemsCities}
              onChange={this.onChange}
              value={value}
              errors={errors}
            />
          )}
          {this.state.page === 3 && (
            <Avatar onChange={this.onChange} value={value} errors={errors} />
          )}
          {this.state.page === 4 && (
            <Last onChange={this.onChange} value={value} />
          )}
          {
            <Buttons
              page={page}
              previousPage={this.previousPage}
              nextPage={this.nextPage}
              onReset={this.onReset}
            />
          }
        </form>
      </div>
    );
  }
}

export default App;
