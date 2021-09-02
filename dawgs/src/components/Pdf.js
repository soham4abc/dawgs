import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Searchpdf from "./underPdf/Searchpdf";
import Searchmp3 from "./underPdf/Searchmp3";
import Searchmp4 from "./underPdf/Searchmp4";

function Pdf() {
  return (
    <>
      <div className="container">
        <h1 className="my-3">Select what you want to search</h1>
        <Router>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <button type="button" className="btn btn-outline-dark">
                  <Link to="searchpdf">PDFs</Link>
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <button type="button" className="btn btn-outline-dark">
                  <Link to="searchmp3">MP3s</Link>
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <button type="button" className="btn btn-outline-dark">
                  <Link to="searchmp4">MP4s</Link>
                </button>
              </a>
            </li>
          </ul>
          <Switch>
            <Route path="/searchpdf">
              <Searchpdf />
            </Route>
            <Route path="/searchmp3">
              <Searchmp3 />
            </Route>
            <Route path="/searchmp4">
              <Searchmp4 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Pdf;
