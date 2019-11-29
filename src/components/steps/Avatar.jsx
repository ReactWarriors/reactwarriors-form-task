import React from "react";

const Avatar = props => {
  const { value, onChangeAvatar, errors } = props;
  return (
    <div className="form-group">
      {value.avatar === "" ? (
        <div className="photoPlaceholder"></div>
      ) : (
        <div className="photo">
          <img src={value.avatar} className="photoImg" alt={"img"} />
        </div>
      )}
      <label htmlFor="avatar">Avatar</label>
      <input
        type="file"
        className="form-control-file"
        id="avatar"
        name="avatar"
        onChange={onChangeAvatar}
      />
      {errors.avatar ? <div className="error">{errors.avatar}</div> : null}
    </div>
  );
};

export default Avatar;
