import React from "react";
import Field from "../Field";
import countries from "../../data/countries";
import cities from "../../data/cities";

const Main = props => {
  const {
    value,
    onChange,
    errors,
    getOptionsItems,
    getOptionsItemsCities
  } = props;
  return (
    <div className="form-group">
      <Field
        id="email"
        labelText="Email"
        type="email"
        placeholder="email"
        name="email"
        value={value.email}
        onChange={onChange}
        error={errors.email}
      />

      <Field
        id="mobile"
        labelText="Mobile"
        type="tel"
        placeholder="Enter Mobile"
        name="mobile"
        value={value.mobile}
        onChange={onChange}
        error={errors.mobile}
      />

      <label htmlFor="country">Country</label>
      <select
        className="form-control"
        id="country"
        name="country"
        value={value.country}
        onChange={onChange}
      >
        {getOptionsItems(countries)}
      </select>
      {errors.country ? <div className="error">{errors.country}</div> : null}
      <label htmlFor="city">City</label>
      <select
        className="form-control"
        id="city"
        name="city"
        value={value.city}
        onChange={props.onChange}
      >
        {getOptionsItemsCities(cities)}
      </select>
    </div>
  );
};

export default Main;
