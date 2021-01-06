import React from "react";
import errorPage from "../images/errorPage.png";

const ErrorPage = (props) => {
  return (
    <div className="container pt-5 text-center errorImg">
      <h1 className="mt-5 pt-5">Sorry, this page doesn't exist !</h1>
      <img className="pt-5" src={errorPage} alt="Error 404"></img>
      <button
        onClick={props.history.goBack}
        className="btn btn-outline-dark btn-lg d-block align mx-auto mt-5"
      >
        Click here to go back
      </button>
    </div>
  );
};

export default ErrorPage;
