import React from "react";
import Field from "./Field";
import countries from "../../data/countries";
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
            errors={errors.country}
          >
            <option>Choose country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors && <div className="invalid-feedback text-center">{errors.country}</div>}
        </div>
        <div>
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            className="custom-select"
            onChange={selectCity}
            value={values.city}
            errors={errors.city}
          >
            <option>Choose city</option>
            {values.selectedCities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors && <div className="invalid-feedback text-center">{errors.city}</div>}
        </div>
      </div>
    );
  }
}
