import React from "react";
import Field from "../Field";
import countries from "../../data/countries";
import cities from "../../data/cities";

export default class Main extends React.Component {
  getOptionsItems = items => {
    const defaultOption = (
      <option key={"Select country"} value={"Select country"}>
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

  getOptionsItemsCities = cities => {
    const options = [];
    for (let key in cities) {
      if (cities[key].country === +this.props.values.country) {
        options.push({
          id: key,
          name: cities[key].name
        });
      }
    }

    const defaultOption = (
      <option key={0} value="">
        Select city
      </option>
    );

    return [
      defaultOption,
      ...options.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))
    ];
  };

  render() {
    const { values, onChange, errors } = this.props;
    return (
      <div className="form-group">
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />

        <Field
          id="mobile"
          labelText="Mobile"
          type="tel"
          placeholder="Enter Mobile"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
        />

        <label htmlFor="country">Country</label>
        <select
          className="form-control"
          id="country"
          name="country"
          value={values.country}
          onChange={onChange}
        >
          {this.getOptionsItems(countries)}
        </select>
        {errors.country ? <div className="error">{errors.country}</div> : null}

        <label htmlFor="city">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          value={values.city}
          onChange={onChange}
        >
          {this.getOptionsItemsCities(cities)}
        </select>
        {errors.city ? <div className="error">{errors.city}</div> : null}
      </div>
    );
  }
}
