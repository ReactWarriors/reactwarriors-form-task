import React from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  resetPages: formStore.resetPages
}))
@observer
class FinishPage extends React.Component {
  render() {
    const { values, resetPages } = this.props;
    const cityName = ` City: ${cities[values.city].name}`;
    const countryName = `Country: ${
      countries.find(country => {
        return country.id === Number(values.country);
      }).name
    }`;
    return (
      <div className="card" style={{ width: "100%", border: "0px" }}>
        <img
          className="card-img-top"
          src={values.avatar}
          style={{ width: "200px", height: "200px", padding: "20px" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {values.firstname} {values.lastname}
          </h5>
          <p className="card-text">Email: {values.email}</p>
          <p className="card-text">Mobile: {values.mobile}</p>
          <p className="card-text">{countryName}</p>
          <p className="card-text">{cityName}</p>
          <a href="#" className="btn btn-primary" onClick={resetPages}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}

export default FinishPage;
