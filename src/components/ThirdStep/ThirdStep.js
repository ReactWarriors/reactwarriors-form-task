import React from 'react'
import classNames from 'classnames'

const imgStyle = {
  objectFit: 'scale-down',
}
const defaultAvatar =
  'https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png'

export default class ThirdStep extends React.Component {
  onChangeAvatar = event => {
    const reader = new FileReader()
    reader.onload = event => {
      this.props.onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    const { values, errors } = this.props
    return (
      <div className="d-flex flex-column justify-content-center ">
        <img
          src={values.avatar || defaultAvatar}
          style={imgStyle}
          className="img-fluid mb-4"
          alt="UserImage"
        />
        <div className="custom-file mb-4">
          <input
            type="file"
            className={classNames('custom-file-input', {
              'is-invalid': errors.avatar,
            })}
            id="avatar"
            name="avatar"
            onChange={this.onChangeAvatar}
          />
          <label className="custom-file-label" htmlFor="avatar">
            Choose avatar
          </label>
        </div>
        {errors.avatar ? (
          <p className="invalid-feedback">{errors.avatar}</p>
        ) : null}
      </div>
    )
  }
}
