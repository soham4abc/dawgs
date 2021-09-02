import React from "react";
import "./display.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
></link>;
function display() {
  return (
    <>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="active"
              aria-current="true"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1200x400/?books"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Books</h1>
                  <p>A writer only begins a book. A reader finishes it.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1200x400/?tech,code"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />

              <div className="container">
                <div className="carousel-caption">
                  <h1>Teacher</h1>
                  <p>
                    One child, one teacher, one book, one pen can change the
                    world.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/1200x400/?phones,laptops"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Students</h1>
                  <p>Success is the sum of small efforts, repeated.</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container m">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="https://source.unsplash.com/140x140/?admin"
                alt=""
              />

              <h2>
                Administration
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bank2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                </svg>
              </h2>
              <p>
                For handling the whole Administrative works of the institution
              </p>
              <p>
                <a className="btn btn-primary" href="/">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="https://source.unsplash.com/140x140/?classroom"
                alt=""
              />

              <h2>Teacher/Professors</h2>
              <p>
                For Teachers/Professors- An alternative way of teaching as well
                as learning.
              </p>
              <p>
                <a className="btn btn-success" href="/">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="https://source.unsplash.com/140x140/?technology,apple"
                alt=""
              />

              <h2>Student's Corner</h2>
              <p>
                And lastly this, the third column is one and only for students.
              </p>
              <p>
                <a className="btn btn-danger" href="/">
                  View details »
                </a>
              </p>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.
                <span className="text-muted">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x300"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x300
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it’s that good.
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x300
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one. <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x300
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
        <footer className="container">
          <p className="float-end">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-bar-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </a>
          </p>
          <p>
          © 2021 made with love · <a href="/">Privacy</a> ·{" "}
            <a href="/">Terms</a>
          </p>
        </footer>
      </main>
    </>
  );
}

export default display;
