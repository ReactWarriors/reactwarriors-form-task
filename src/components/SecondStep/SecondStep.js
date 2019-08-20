import React from "react";
import Field from "../Field/Field";
import countries from "../data/countries.js";
import cities from "../data/cities.js";

export default class SecondStep extends React.Component {
  getOptionsItems = () => {
    const countriesNames = countries;
    return countriesNames.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getCitiesOptions = () => {
    let citiListItem = [];
    for (let key in cities) {
      // ключи
      //console.log( key );  // "1", "2", "3" ...
      // значения ключей
      //console.log( cities[key].country ); // country, name...
      if (cities[key].country === this.props.values.country) {
        citiListItem.push({ id: cities[key].country, name: cities[key].name });
      }
      console.log(cities[key].country)
      console.log(this.props.values.country)
      return citiListItem.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
          
        </option>
      ));
    }
  };


  render() {
    const { errors, values, onChange } = this.props;
    return (
      <div>
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          error={errors.email}
          onChange={onChange}
        />
        <Field
          id="phone"
          labelText="Phone"
          type="phone"
          placeholder="Enter your phone number"
          name="phone"
          value={values.phone}
          error={errors.phone}
          onChange={onChange}
        />

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className={
              errors.country ? "form-control is-invalid" : "form-control"
            }
            id="country"
            name="country"
            value={values.country}
            onChange={onChange}
            error={errors.country}
          >
            {this.getOptionsItems()}
          </select>
          {errors.country ? (
            <div className="invalid-feedback">{errors.country}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={errors.city ? "form-control is-invalid" : "form-control"}
            id="city"
            name="city"
            value={values.city}
            onChange={onChange}
            error={errors.city}
          >
            {this.getCitiesOptions()}
          </select>
          {errors.city ? (
            <div className="invalid-feedback">{errors.city}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
