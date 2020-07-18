import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div id="button-container">
        <Link to="/">
          <button id="back-button">Home</button>
        </Link>
      </div>
      <br />
      <div >
        <h1>Sorry</h1>
        <span role="img" aria-label="sad emoji">
          😔
        </span>
        <br />
        The citizen you are searching for is not found in the database. <br />
        Please try again
      </div>
    </>
  );
}