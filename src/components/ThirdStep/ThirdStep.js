import React from "react";

const imgStyle = {
  objectFit: "scale-down",

}

export default class ThirdStep extends React.Component {
  render() {
    const { onChangeAvatar, defaultAvatar, avatar, errorAvatar } = this.props;
    return (
      <div className="d-flex flex-column justify-content-center ">
        <img
          src={ avatar === "" ? defaultAvatar : avatar }
          style={imgStyle}
          className="img-fluid mb-4"
          alt="UserImage"
        />
        <div className="custom-file mb-4">
          <input
            type="file"
            className={errorAvatar ? "custom-file-input is-invalid":"custom-file-input" }
            id="avatar"
            name="avatar"
            onChange={onChangeAvatar}
          />
          <label className="custom-file-label" htmlFor="avatar">
            Choose avatar
          </label>
        </div>
        {errorAvatar ? (
            <p className="invalid-feedback">{errorAvatar}</p>
          ) : null}
      </div>
    );
  }
}
