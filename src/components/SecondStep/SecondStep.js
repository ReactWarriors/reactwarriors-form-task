import React from "react";
import Field from "../Field/Field";
export default class SecondStep extends React.Component {
  render() {
    const {
      getOptionsItems,
      selectedDefault,
      getCitiesOptions,
      errors,
      values,
      onChange
    } = this.props;
    return (
      <div>
        <p>Second Step</p>
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          error={errors.errorEmail}
          onChange={onChange}
        />
        <Field
          id="phone"
          labelText="Phone"
          type="phone"
          placeholder="Enter your phone number"
          name="phone"
          value={values.phone}
          error={errors.errorPhone}
          onChange={onChange}
        />

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className={
              errors.errorCountry ? "form-control is-invalid" : "form-control"
            }
            id="country"
            name="country"
            value={values.country}
            onChange={onChange}
            error={errors.errorCountry}
          >
            <option value={selectedDefault}>Select country:</option>
            {getOptionsItems()}
          </select>
          {errors.errorCountry ? (
            <div className="invalid-feedback">{errors.errorCountry}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={
              errors.errorCity ? "form-control is-invalid" : "form-control"
            }
            id="city"
            name="city"
            value={values.city}
            onChange={onChange}
            error={errors.errorCity}
          >
            <option value={selectedDefault}>Select city:</option>
            {getCitiesOptions()}
          </select>
          {errors.errorCity ? (
            <div className="invalid-feedback">{errors.errorCity}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
