import React from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";

class Last extends React.Component {
  getCountry = countries => {
    let stateCountry = this.props.values.country;
    let country = countries.find(country => country.id == stateCountry);
    return country ? country.name : null;
  };
  getCity = cities => {
    let stateCity = this.props.values.city;
    for (let city in cities) {
      if (city == stateCity) {
        return cities[city].name;
      }
    }
  };
  render() {
    const { values } = this.props;
    return (
      <div className="form_container">
        <div className="img-name-container">
          <img src={values.avatar} width={120} height={130} alt={"img"} />
          <div className="img-name-container__tittle">{`${values.firstname} ${values.lastname}`}</div>
        </div>

        <div>
          <span>
            <b>Email: </b>
            {` ${values.email}`}
          </span>
        </div>
        <div>
          <span>
            <b>Mobile:</b>
          </span>
          {` ${values.mobile}`}
        </div>
        <div>
          <span>
            <b>Location:</b>
          </span>
          {` ${this.getCountry(countries)}, ${this.getCity(cities)}`}
        </div>
      </div>
    );
  }
}

export default Last;
