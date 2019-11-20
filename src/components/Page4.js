import React from "react";
import countries from "../data/countries";

const Page4 = props => {
  const { appState } = props;
  return (
    <div className="form_container">
      <div>
        <img src={appState.avatar} width={70} height={100} alt={"img"} />
      </div>
      <div>{`${appState.firstname} ${appState.lastname}`}</div>
      <div>{`Email: ${appState.email}`}</div>
      <div>{`Mobile: ${appState.mobile}`}</div>
      <div>{`Location: ${countries[appState.country - 1].name}, ${
        appState.city
      }`}</div>
    </div>
  );
};

export default Page4;
