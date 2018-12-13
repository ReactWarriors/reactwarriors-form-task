import React from "react";
import Field from "./Field";
import countries from "../../data/countries";
import cities from "../../data/cities";
export default class SecondPage extends React.Component {
  render() {
    const { onChange, errors, selectCity, selectCountry, values } = this.props;
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
            onChange={selectCountry}
            value={values.country}
          >
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            className="custom-select"
            onChange={selectCity}
            value={values.country}
          />
        </div>
      </div>
    );
  }
}
