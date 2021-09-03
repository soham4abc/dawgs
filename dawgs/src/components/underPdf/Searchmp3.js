import React, { useState } from "react";

function Searchmp3() {
  const [text, setText] = useState("");

  const changeTextArea = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const gSearch = () => {
    let text = document.getElementById("searchKeyword");
    text.select();
    navigator.clipboard.writeText(text.value);
    let sertxt = "https://www.google.com/search?q=";
    text = sertxt + text.value;
    text = text + "+filetype%3Amp3";
    window.open(text, "_blank");
  };

  return (
    <div className="container">
      <label htmlFor="inputPassword5" className="form-label my-3">
        Optimised Google search, get only what you want!
      </label>
      <input
        id="searchKeyword"
        value={text}
        className="form-control"
        onChange={changeTextArea}
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" className="form-text">
        You must enter some keywords which describes the mp3 you want
      </div>
      <button
        type="submit"
        className="btn btn-outline-dark my-3"
        onClick={gSearch}
      >
        Search
      </button>

      <button
        type="submit"
        className="btn btn-outline-dark my-3 mx-3"
        onClick={clearText}
      >
        Clear
      </button>
    </div>
  );
}

export default Searchmp3;
