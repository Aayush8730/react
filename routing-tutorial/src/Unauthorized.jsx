import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <p>You do not have access to this page.</p>
      <Link to="/login">
        Go to Login Page
      </Link>
    </div>
  );
};

export default Unauthorized;
