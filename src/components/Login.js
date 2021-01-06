import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FirebaseContext } from "./Firebase";

const Login = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/welcome");
      })
      .catch((error) => {
        setError(error);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="container pt-5">
      <div className="pt-5 box">
        <h2>Login</h2>

        {error !== "" && <span>{error.message}</span>}

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="inputBox">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              required
              autoComplete="off"
            />
            <label>Password</label>
            <NavLink id="forgotPass" to="/forgetpassword">
              Forgot password?
            </NavLink>
          </div>

          {btn ? (
            <button type="submit" className="subbtn">
              Login
            </button>
          ) : (
            <button type="submit" className="subbtn" disabled>
              Login
            </button>
          )}

          <NavLink id="createAcc" to="/register">
            Create Account
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
