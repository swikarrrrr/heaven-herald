import React, { Fragment } from "react";
import "../App.css";
import PostData from "../data/confessions.json";

class confess extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <center>
            <img class="confessimg" src={require("../images/confess.jpg")} />
          </center>
        </div>
        <iframe
          className="confessframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd0Mhj1EadghEuAbaGiCKoAKQVGX1rdWbajrfFuyXXLcTVWBQ/viewform?embedded=true"
        >
          Loading…
        </iframe>
        <div class="confessions">
          <h1>Confessions</h1>
          {PostData.map((postDetail, index) => {
            return <p>{postDetail.comment}</p>;
          })}
        </div>
      </Fragment>
    );
  }
}

export default confess;
