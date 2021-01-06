import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import Login from "./components/Login";
import RegisterAcc from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ForgotPass from "./components/ForgotPass";
import ErrorPage from "./components/ErrorPage";
import Welcome from "./components/Welcome";

import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=6850d72b";

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <header>
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
          </header>
        </ErrorBoundary>
        <ErrorBoundary>
          <section>
            <Route exact path="/">
              <Search handleInput={handleInput} search={search} />
            </Route>
          </section>
        </ErrorBoundary>
        <ErrorBoundary>
          <main>
            <Route exact path="/">
              <Results results={state.results} openPopup={openPopup} />
            </Route>
            <Route exact path="/">
              {typeof state.selected.Title != "undefined" ? (
                <Popup selected={state.selected} closePopup={closePopup} />
              ) : (
                false
              )}
            </Route>
          </main>
        </ErrorBoundary>
        <Switch>
          <Route exact path="/welcome">
            <Home />
            <ErrorBoundary>
              <Search handleInput={handleInput} search={search} />
            </ErrorBoundary>
            <ErrorBoundary>
              <Results results={state.results} openPopup={openPopup} />
            </ErrorBoundary>
            {typeof state.selected.Title != "undefined" ? (
              <Popup selected={state.selected} closePopup={closePopup} />
            ) : (
              false
            )}
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterAcc} />
          <Route path="/forgetpassword" component={ForgotPass} />
          <Route exact path="/" component={Footer} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
