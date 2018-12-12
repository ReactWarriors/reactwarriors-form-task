import React from "react";
import Field from "./Field";
import countries from "../../data/countries";
import cities from "../../data/countries";

export default class SecondPage extends React.Component {
  constructor() {
    super();
    this.state = {
      country: 1,
      city: 1
    };
  }

  selectCountry = event => {
    this.setState({ ...this.state, country: event.target.value });
  };

  selectCity = event => {
    this.setState({ ...this.state, city: event.target.value });
  };

  render() {
    const { onChange, errors } = this.props;
    return (
      <div>
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="Enter email"
          name="email"
          errors={errors.email}
          onChange={onChange}
        />
        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile"
          name="mobile"
          errors={errors.mobile}
          onChange={onChange}
        />
        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            className="custom-select"
            onChange={this.selectCountry}
          >
            {countries.map(country => (
              <option
                key={country.id}
                value={country.id}
                selected={country.id === this.state.country}
              >
                {country.name}
              </option>
            ))}
          </select>
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            className="custom-select"
            onChange={this.selectCity}
          >
            {Object.values(cities)
              .filter(city => city.country === this.state.country)
              .map(city => (
                <option
                  key={city.country}
                  value={city.country}
                  selected={city.country === this.state.city}
                >
                  {city.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  }
}
