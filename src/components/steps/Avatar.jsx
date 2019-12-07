import React from "react";
import DefaultAvatar from "../../assets/default_avatar.jpg";

class Avatar extends React.Component {
  onChangeAvatar = event => {
    const reader = new FileReader();
    event.persist();
    reader.onload = event => {
      this.props.onChange({
        target: {
          name: "avatar",
          value: event.target.result
        },
        persist: () => {}
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  render() {
    const { values, errors } = this.props;
    return (
      <div className="form-group">
        {values.avatar === "" ? (
          <div className="photoPlaceholder">
            <img src={DefaultAvatar} alt="img" />
          </div>
        ) : (
          <div className="photoPlaceholder">
            <img src={values.avatar} className="photoImg" alt="img" />
          </div>
        )}

        <input
          type="file"
          className="form-control-file avatar"
          id="avatar"
          name="avatar"
          onChange={this.onChangeAvatar}
        />
        {errors.avatar ? <div className="error">{errors.avatar}</div> : null}
      </div>
    );
  }
}

export default Avatar;
