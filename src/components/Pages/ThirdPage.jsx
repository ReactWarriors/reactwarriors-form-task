import React from "react";

export default class ThirdPage extends React.Component {
  render() {
    const { errors, avatar, onChange, onChangeAvatar, values } = this.props;
    return (
      <div>
        <img className="mb-4" width="100%" src={values.avatar} alt="" />
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            name="avatar"
            onChange={onChangeAvatar}
          />
          <label className="custom-file-label" htmlFor="file">
            Choose avatar
          </label>
        </div>
      </div>
    );
  }
}
