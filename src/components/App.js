import React from "react";
import TabsContainer from "./TabsContainer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
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
      avatar: "",
      errors: {}
    };
  }

  validation = errors => {
    if (this.state.page === 1) {
      if (this.state.firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more";
      }

      if (this.state.lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more";
      }

      if (this.state.password < 3) {
        errors.password = "Must be 3 characters or more";
      }

      if (this.state.password !== this.state.repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }
    }
    if (this.state.page === 2) {
      if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email)) {
        errors.email = "Ivalid email";
      }
      if (!/^\d+$/.test(this.state.mobile)) {
        errors.mobile = "Ivalid mobile";
      }
      if (this.state.country === "Select country") {
        errors.country = "Select country";
      }
    }
    if (this.state.page === 3) {
      if (!this.state.avatar) {
        errors.avatar = "Choose image";
      }
    }
  };

  nextPage = event => {
    event.preventDefault();
    const errors = {};
    this.validation(errors);

    if (Object.keys(errors).length > 0) {
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
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  reset = event => {
    event.preventDefault();
    this.setState({
      page: 1,
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
      avatar: "",
      errors: {}
    });
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
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
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

  render() {
    return (
      <div className="container">
        <form className="form">
          <TabsContainer page={this.state.page} />
          {this.state.page === 1 ? (
            <Page1 onChange={this.onChange} appState={this.state} />
          ) : this.state.page === 2 ? (
            <Page2
              getOptionsItems={this.getOptionsItems}
              getOptionsItemsCities={this.getOptionsItemsCities}
              onChange={this.onChange}
              appState={this.state}
            />
          ) : this.state.page === 3 ? (
            <Page3
              name="avatar"
              onChangeAvatar={this.onChangeAvatar}
              appState={this.state}
            />
          ) : this.state.page === 4 ? (
            <Page4 onChange={this.onChange} appState={this.state} />
          ) : (
            ""
          )}
          {this.state.page < 4 ? (
            <div className="button_container">
              <button onClick={this.previousPage}>Previous</button>
              <button onClick={this.nextPage}>Next</button>
            </div>
          ) : (
            <div className="button_container">
              <button onClick={this.reset}>Reset</button>
            </div>
          )}

          <div className="page">{`page:  ${this.state.page}`}</div>
        </form>
      </div>
    );
  }
}

export default App;
