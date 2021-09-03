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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
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
              </h2>
              <p>
                For handling the whole Administrative works of the institution
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
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Facial Recorginition.
                <span className="text-muted"> An authority friendly idea</span>
              </h2>
              <p className="lead">
                A system for institution authorities to note down students'
                attendance with an ease.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                src="https://source.unsplash.com/500x300/?phone,selfie"
                alt=""
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                TakeNotes.
                <span className="text-muted"> Take notes by yourself.</span>
              </h2>
              <p className="lead">
                Another feature? Of course. This time it's for students to take notes at a time of their ongoing classes.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
            <img
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                src="https://source.unsplash.com/500x300/?notebooks,pen"
                alt=""
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one, Optimized Google Search.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last feature which can help the user(student/teacher) to access the Google web browser for any search without facing any problem.
              </p>
            </div>
            <div className="col-md-5">
            <img
                className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
                width="500"
                height="300"
                src="https://source.unsplash.com/500x300/?google,search"
                alt=""
              />
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
            © 2021 made with love
          </p>
        </footer>
      </main>
    </>
  );
}

export default display;
