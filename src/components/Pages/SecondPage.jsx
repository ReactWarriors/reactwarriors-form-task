import React from "react";
import Field from "./Field";
import countries from "../../data/countries";
export default class SecondPage extends React.Component {
  // <select
  //   id="city"
  //   name="city"
  //   className="custom-select"
  //   onChange={this.selectCity}
  // >
  //   {Object.values(cities)
  //     .filter(city => city.country === this.state.geoLocation)
  //     .map(city => (
  //       <option
  //         key={city.country}
  //         value={city.country}
  //         selected={city.country === this.state.city}
  //       >
  //         {city.name}
  //       </option>
  //     ))}
  // </select>

  // <option
  //   key={}
  //   value={cities[key]}
  //   selected={cities[key] === this.state.country}
  // >

  render() {
    const {
      onChange,
      errors,
      selectCity,
      selectCountry,
      country,
      city
    } = this.props;
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
            value={country}
          >
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <label htmlFor="city">City</label>
        </div>
      </div>
    );
  }
}
