import React from 'react'
import Field from '../Field/Field'
import countries from '../data/countries.js'
import cities from '../data/cities.js'

export default class SecondStep extends React.Component {
  getCitiesOptions = items => {
    let citiesList = []
    for (let key in items) {
      if (items[key].country === Number(this.props.values.country)) {
        citiesList.push({ id: key, name: items[key].name })
      }
    }
    return citiesList.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  render() {
    const { errors, values, onChange } = this.props
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
              errors.country ? 'form-control is-invalid' : 'form-control'
            }
            id="country"
            name="country"
            value={values.country}
            onChange={onChange}
            error={errors.country}
          >
            <option value="">Select country:</option>
            {countries.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.country ? (
            <div className="invalid-feedback">{errors.country}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={errors.city ? 'form-control is-invalid' : 'form-control'}
            id="city"
            name="city"
            value={values.city}
            onChange={onChange}
            error={errors.city}
          >
            <option value="">Select city:</option>
            {this.getCitiesOptions(cities)}
          </select>
          {errors.city ? (
            <div className="invalid-feedback">{errors.city}</div>
          ) : null}
        </div>
      </div>
    )
  }
}
