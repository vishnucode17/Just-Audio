import React from 'react';

function Upload(props) {
  return (
    <div className="upload">
      <div className="upload__title">
        <h1>Upload</h1>
      </div>
      <div className="upload__form">
        <form onSubmit={props.handleSubmit}>
          <label className="upload__label">
            <span className="upload__label-text">Choose a file</span>
            <input
              className="upload__input"
              type="file"
              name="file"
              onChange={props.handleChange}
            />
          </label>
          <button className="upload__button" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;