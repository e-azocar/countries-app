import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFound = () => (
  <div className="not-found-container">
    <h1>404</h1>
    <p>Page Not Found</p>
    <Link to="/" className="return-home">
      &crarr; Return to homepage
    </Link>
  </div>
);

export default NotFound;
