import React, { useState } from "react";
import UseGoogleSearch from "./googlesearch";

function Searchpdf() {
  const [text, setText] = useState("");

  const changeTextArea = (event) => {
    setText(event.target.value);
  };

  const gSearch = () => {
    let text = document.getElementById("searchKeyword");
    text.select();
    let newText = text.value + " filetype:pdf";
    console.log(newText);
    navigator.clipboard.writeText(text.value);
  };

  const texts=text+" filetype:pdf"
    const {data} = UseGoogleSearch(texts);
    console.log(data);
    console.log(texts);

  return (
    <>
      <div className="container">
        <label htmlFor="inputPassword5" className="form-label">
          Search pdf in Google
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
          className="btn btn-primary my-3"
          onClick={gSearch}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Searchpdf;
