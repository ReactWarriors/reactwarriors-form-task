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
        countryName: "",
        city: "",
        gender: "female",
        avatar: ""
      },

      errors: {}
    };
    this.state = this.initialState;
  }

  getErrors = () => {
    const errors = {};
    const emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const mobileReg = /^\d+$/;

    switch (this.state.page) {
      case 1:
        if (this.state.value.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }

        if (this.state.value.lastname.length < 5) {
          errors.lastname = "Must be 5 characters or more";
        }

        if (this.state.value.password < 3) {
          errors.password = "Must be 3 characters or more";
        }

        if (this.state.value.password !== this.state.value.repeatPassword) {
          errors.repeatPassword = "Must be equal password";
        }
        break;
      case 2:
        if (!emailReg.test(this.state.value.email)) {
          errors.email = "Ivalid email";
        }
        if (!mobileReg.test(this.state.value.mobile)) {
          errors.mobile = "Invalid mobile";
        }
        if (this.state.value.country === "Select country") {
          errors.country = "Select country";
        }
        break;
      case 3:
        if (!this.state.value.avatar) {
          errors.avatar = "Choose image";
        }
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
      this.setState({
        page: this.state.page + 1,
        errors: {}
      });
    }
  };

  previousPage = event => {
    event.preventDefault();
    this.setState({
      page: this.state.page - 1
    });
  };

  onReset = event => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  getOptionsItems = items => {
    const defaultOption = (
      <option key={0} value={"Select country"}>
        Select country
      </option>
    );
    return [
      defaultOption,
      ...items.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))
    ];
  };

  getOptionsItemsCities = items => {
    const citiesArr = [];
    for (let key in items) {
      if (items[key].country === +this.state.country) {
        citiesArr.push(items[key].name);
      }
    }
    return citiesArr.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
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

  onChangeAvatar = event => {
    const reader = new FileReader();
    event.persist();
    reader.onload = event => {
      this.setState(state => ({
        value: {
          ...state.value,
          avatar: event.target.result
        }
      }));
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (
      <div className="container">
        <form className="form">
          <TabsContainer page={this.state.page} />
          {this.state.page === 1 && (
            <Basic
              onChange={this.onChange}
              value={this.state.value}
              errors={this.state.errors}
            />
          )}
          {this.state.page === 2 && (
            <Main
              getOptionsItems={this.getOptionsItems}
              getOptionsItemsCities={this.getOptionsItemsCities}
              onChange={this.onChange}
              value={this.state.value}
              errors={this.state.errors}
            />
          )}
          {this.state.page === 3 && (
            <Avatar
              name="avatar"
              onChangeAvatar={this.onChangeAvatar}
              value={this.state.value}
              errors={this.state.errors}
            />
          )}
          {this.state.page === 4 && (
            <Last onChange={this.onChange} value={this.state.value} />
          )}
          {
            <Buttons
              page={this.state.page}
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
