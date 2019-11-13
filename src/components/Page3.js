import React from "react";

const Page3 = props => {
  return (
    <div className="form-group">
      <div className="photo"></div>
      <label htmlFor="avatar">Avatar</label>
      <input
        type="file"
        className="form-control-file"
        id="avatar"
        name="avatar"
      />
    </div>
  );
};

export default Page3;
