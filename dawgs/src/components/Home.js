import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TakeNotes from "./TakeNotes";

function Home() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              AppNameHere
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/">SearchPdf</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="takeNotes">TakeNotes</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contests
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Music
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    AttendenceSystem
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/takeNotes">
            <TakeNotes />
          </Route>
        </Switch>
      </Router>
      <div className="container">
        <h1>This is an app from our own mehnat</h1>
      </div>
    </>
  );
}

export default Home;
