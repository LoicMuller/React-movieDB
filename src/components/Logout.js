import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "./Firebase";

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      firebase.signoutUser();
    }
  }, [checked, firebase]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container">
          <div>
            <a href="/welcome" className="navbar-brand">
              <i className="fas fa-film"></i>
            </a>
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarText"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarText" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <span className="nav-link">Logout</span>
              </li>
            </ul>
            <label className="switch">
              <input
                onChange={handleChange}
                type="checkbox"
                checked={checked}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Logout;
