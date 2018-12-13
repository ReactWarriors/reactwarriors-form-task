import React from "react";

export default class ThirdPage extends React.Component {
  render() {
    const { errors, avatar, onChange } = this.props;
    return (
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="file"
          value={avatar}
          onChange={onChange}
        />
        <label className="custom-file-label" htmlFor="file">
          Choose avatar
        </label>
      </div>
    );
  }
}
