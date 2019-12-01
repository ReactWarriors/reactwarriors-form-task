import React from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";

class Last extends React.Component {
  getCountry = countries => {
    let stateCountry = this.props.value.country;
    let country = countries.find(country => country.id == stateCountry);
    return country.name;
  };
  getCity = cities => {
    let stateCity = this.props.value.city;
    for (let city in cities) {
      if (city == stateCity) {
        return cities[city].name;
      }
    }
  };
  render() {
    const { value } = this.props;
    return (
      <div className="form_container">
        <div className="img-name-container">
          <img src={value.avatar} width={100} height={130} alt={"img"} />
          <div className="img-name-container__tittle">{`${value.firstname} ${value.lastname}`}</div>
        </div>

        <div>{`Email: ${value.email}`}</div>
        <div>{`Mobile: ${value.mobile}`}</div>
        <div>{`Location: ${this.getCountry(countries)}, ${this.getCity(
          cities
        )}`}</div>
      </div>
    );
  }
}

export default Last;
