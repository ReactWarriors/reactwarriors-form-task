import React from "react";
import countries from "../../data/countries";

export default class FinishPage extends React.Component {
  render() {
    const { values, resetPages } = this.props;
    return (
      <div className="card" style={{ width: "100%", border: "0px" }}>
        <img className="card-img-top" src={values.avatar} style={{width: "200px", height: "200px", padding: "20px"}} alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {values.firstname} {values.lastname}
          </h5>
          <p className="card-text">Email: {values.email}</p>
          <p className="card-text">Mobile: {values.mobile}</p>
          <p className="card-text">
         {countries.map(country => {
              if (country.id === values.country) {
              return ` Country: ${country.name}`
              }
            })}
          </p>
          <p className="card-text">
         {values.selectedCities.map(city => {
              if (city.id === values.city) {

              return ` City: ${city.name}`
              }
            })}
          </p>
          <a href="#" className="btn btn-primary" onClick={resetPages}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}
