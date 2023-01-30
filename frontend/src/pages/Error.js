import React from "react";
import { Link } from "react-router-dom";
import authServices from "../Services/Auth";

const Error = () => {
  const user_type = authServices.getUser()
    ? authServices.getUser().user_type
    : null;
  return (
    <section className="section text-center">
      <h2 className="section-title">Opp's, Dead End </h2>
      <Link to={user_type == 0 ? "/" : "biker"} className="error-page">
        <button className="btn btn-primary">Back To Home</button>
      </Link>
    </section>
  );
};

export default Error;
