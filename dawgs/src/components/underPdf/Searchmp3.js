import React, { useState } from "react";

function Searchmp3() {
  const [text, setText] = useState("");

  const changeTextArea = (event) => {
    setText(event.target.value);
  };

  const gSearch = () => {
    let text = document.getElementById("searchKeyword");
    text.select();
    let newText = text.value + " filetype:mp3";
    console.log(newText);
    navigator.clipboard.writeText(text.value);
  };
  return (
    <div className="container">
      <label htmlFor="inputPassword5" className="form-label">
        Search mp3 in Google
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
      <button type="submit" className="btn btn-primary my-3" onClick={gSearch}>
        Submit
      </button>
    </div>
  );
}

export default Searchmp3;
