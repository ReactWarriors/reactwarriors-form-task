import React from "react";
import defaultAvatar from "../../images/defaultAvatar.png";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  errors: formStore.errors,
  onChangeAvatar: formStore.onChangeAvatar,
  onChange: formStore.onChange
}))
@observer
class ThirdPage extends React.Component {
  render() {
    const { onChangeAvatar, values, errors } = this.props;
    return (
      <div>
        <img
          className="mb-4"
          width="100%"
          src={values.avatar || defaultAvatar}
          alt=""
        />
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            name="avatar"
            onChange={onChangeAvatar}
            errors={errors.avatar}
          />
          <label className="custom-file-label" htmlFor="file">
            Choose avatar
          </label>
          {errors && (
            <div className="invalid-feedback text-center">{errors.avatar}</div>
          )}
        </div>
      </div>
    );
  }
}

export default ThirdPage;
