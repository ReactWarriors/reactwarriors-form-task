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
      values: {
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        mobile: "",
        avatar: ""
      },
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
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    this.setState(prevState => ({
      ...prevState,
      values: newValues
    }));
  };

  validateFields = event => {
    const { page, values } = this.state;

    const errors = {};
    if (page === 1) {
      if (values.firstname !== null && values.firstname.length < 5) {
        errors.firstname = "Firstname is too short";
      }

      if (values.lastname !== null && values.lastname.length < 2) {
        errors.lastname = "Lastname is too short";
      }

      if (values.password !== null && values.password.length < 2) {
        errors.password = "Password is too short";
      }

      if (
        values.repeatPassword !== null &&
        values.repeatPassword !== values.password
      ) {
        errors.repeatPassword = "Passwords must be the same";
      }
    }

    if (page === 2) {
      if (values.email !== null && !values.email.includes("@")) {
        errors.email = "Incorrect email";
      }

      if (values.mobile !== null && values.mobile.length < 2) {
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

  componentWillUnmount() {
    // Remember state for the next mount
    this.setState({
      ...this.state
    });
  }

  render() {
    const { page, values, errors } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          {page === 1 && (
            <FirstPage
              values={values}
              onChange={this.onChange}
              errors={errors}
            />
          )}
          {page === 2 && (
            <SecondPage
              values={values}
              onChange={this.onChange}
              errors={errors}
            />
          )}
          {page === 3 && (
            <ThirdPage
              values={values}
              onChange={this.onChange}
              errors={errors}
            />
          )}
        </form>
        <div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.prevPage}
            disabled={page === 1}
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
