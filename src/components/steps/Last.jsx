import React from "react";
import countries from "../../data/countries";

const Last = props => {
  const { value } = props;
  return (
    <div className="form_container">
      <div>
        <img src={value.avatar} width={70} height={100} alt={"img"} />
      </div>
      <div>{`${value.firstname} ${value.lastname}`}</div>
      <div>{`Email: ${value.email}`}</div>
      <div>{`Mobile: ${value.mobile}`}</div>
    </div>
  );
};

export default Last;
