import React, { useState } from "react";

function Searchpdf() {
  const [text, setText] = useState("");

  const changeTextArea = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    let text = document.getElementById("searchKeyword");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const gSearch = () => {
    let text = document.getElementById("searchKeyword");
    text.select();
    let newText = text.value + " filetype:pdf";
    setText(newText);
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div className="container">
        <label htmlFor="inputPassword5" className="form-label my-3">
        After submit, copy the result and search in google for desired result
        </label>
        <input
          id="searchKeyword"
          value={text}
          className="form-control"
          onChange={changeTextArea}
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          You must enter some keywords which describes the pdf you want
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark my-3"
          onClick={gSearch}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-outline-dark my-3 mx-3"
          onClick={copyText}
        >
          Copy
        </button>
      </div>
    </>
  );
}

export default Searchpdf;
