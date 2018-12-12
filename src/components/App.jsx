import React from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import StepButtons from "./StepButtons";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      mobile: "",
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        mobile: false,
        email: false
      },

      steps: [
        {
          id: 0,
          isActive: true,
          isCompleted: false
        },
        {
          id: 1,
          isActive: false,
          isCompleted: false
        },
        {
          id: 2,
          isActive: false,
          isCompleted: false
        },
        {
          id: 3,
          isActive: false,
          isCompleted: false
        }
      ]
    };
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  validateFields = event => {
    const {
      page,
      firstname,
      lastname,
      password,
      repeatPassword,
      email,
      mobile
    } = this.state;
    const errors = {};
    if (page == 1) {
      if (firstname !== null && firstname.length < 5) {
        errors.firstname = "Firstname is too short";
      }

      if (lastname !== null && lastname.length < 2) {
        errors.lastname = "Lastname is too short";
      }

      if (password !== null && password.length < 2) {
        errors.password = "Password is too short";
      }

      if (repeatPassword !== null && repeatPassword !== password) {
        errors.repeatPassword = "Passwords must be the same";
      }
    }

    if (page == 2) {
      if (email !== null && !email.includes("@")) {
        errors.email = "Incorrect email";
      }

      if (mobile !== null && mobile.length < 2) {
        errors.mobile = "Incorrect mobile";
      }
    }
    return errors;
  };

  nextPage = event => {
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.setState(({ page }) => ({ page: page + 1 }));
    }
  };

  prevPage = () => {
    return this.setState(({ page }) => ({ page: page - 1 }));
  };

  render() {
    const { page, steps, errors } = this.state;
    return (
      <div className="form-container card">
        <StepButtons steps={steps} />
        <form className="form card-body">
          {page === 1 && <FirstPage onChange={this.onChange} errors={errors} />}
          {page === 2 && (
            <SecondPage onChange={this.onChange} errors={errors} />
          )}
          {page === 3 && <ThirdPage onChange={this.onChange} errors={errors} />}
        </form>
        <div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.prevPage}
          >
            Назад
          </button>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.nextPage}
          >
            Вперед
          </button>
        </div>
      </div>
    );
  }
}
