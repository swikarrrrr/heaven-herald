import React, { Fragment } from "react";
import "../App.css";
import HyvorTalk from "hyvor-talk-react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="comment-count-view">
          <HyvorTalk.Embed websiteId={301} id={301} />
        </div>
      </div>
    );
  }
}

export default Home;
