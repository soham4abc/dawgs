import React, { useState } from "react";

export default function TakeNotes() {
  const [text, setText] = useState("Enter text here");
  const updateUpText = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const updateLowText = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const changeTextArea = (event) => {
    console.log("Text area changed");
    setText(event.target.value);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const copyText = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const download = () => {
    document.getElementById("dload").onclick = function () {
      var l = document.createElement("a");
      l.href =
        "data:text/plain;charset=UTF-8," +
        document.getElementById("dload-txt").value;
      l.setAttribute("download", document.getElementById("dload-fn").value);
      l.click();
    };
  };

  return (
    <>
      <div className="container">
        <h1></h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={changeTextArea}
            value={text}
            id="textBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-outline-dark mx-2" onClick={updateUpText}>
          Convert to UpperCase
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={updateLowText}>
          Convert to LowerCase
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={copyText}>
          Copy
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={clearText}>
          Clear
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={download}
          id="downloadButton"
        >
          Save
        </button>
      </div>
      <div className="my-5 container">
        <h2>Your text summary : </h2>
        <h5>
          Number of words: {text.split(" ").length} <br />
          Number of characters: {text.length}
        </h5>
      </div>
      <div className="my-5 container">
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something above to preview it here."}
        </p>
      </div>
    </>
  );
}
