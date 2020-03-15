import React, { Fragment } from "react";
import "../App.css";

class assign extends React.Component {
  render() {
    return (
      <Fragment>
        <div class="assignhead">
          <h1>ASSIGNMENTS</h1>
          <p>"Sharing Is Caring"</p>
        </div>
        <div class="drive">
          <iframe
            className="assignframe"
            src="https://drive.google.com/embeddedfolderview?id=1dOGbhdU8stuOpHdX3EcnZ3dphVUJeHvw#list"
          ></iframe>
        </div>
        <a href="https://driveuploader.com/upload/lROxUevTW6/" target="new">
          <button class="button">
            <span>Upload</span>
          </button>
        </a>
      </Fragment>
    );
  }
}

export default assign;
