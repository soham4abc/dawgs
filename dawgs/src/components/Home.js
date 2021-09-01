import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TakeNotes from "./TakeNotes";
import Display from "./Display";
import Attendance from "./Attendance";
import Pdf from "./Pdf";
import Music from "./Music";
import Contests from "./Contest";


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
                    <Link to="display">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="pdf">SearchPdf</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="takeNotes">TakeNotes</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                   <Link to="contest">Contest</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <Link to="music">Music</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <Link to="attendance">Attendance</Link>
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
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/contest">
            <Contests />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/pdf">
            <Pdf />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default Home;
