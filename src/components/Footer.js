import React from "react";

function Footer() {
  return (
    <footer className="bg-dark p-2 mt-5 text-light text-right footerPage">
      <div className="container">
        <p className="lead">Icons are taken from IconFinder.com</p>
        <p>
          {new Date().getUTCFullYear() - 1} - {new Date().getUTCFullYear()} ©
          Movie Database
        </p>
      </div>
    </footer>
  );
}

export default Footer;
