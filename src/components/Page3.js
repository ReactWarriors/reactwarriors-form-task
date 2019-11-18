import React from "react";

const Page3 = props => {
  const { onChangeAvatar, appState } = props;
  return (
    <div className="form-group">
      {appState.avatar === "" ? (
        <div className="photoPlaceholder"></div>
      ) : (
        <div className="photo">
          <img src={appState.avatar} className="photoImg" alt={"img"} />
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
      {appState.errors.avatar ? (
        <div className="error">{appState.errors.avatar}</div>
      ) : null}
    </div>
  );
};

export default Page3;
