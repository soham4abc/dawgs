import React from "react";

function TakeNotes() {

    const download = () =>{
        document.getElementById("dload").onclick = function(){
            var l = document.createElement("a");
            l.href = "data:text/plain;charset=UTF-8," + document.getElementById("dload-txt").value;
            l.setAttribute("download", document.getElementById("dload-fn").value);
            l.click();
          }
    }

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" id="side-navbar"></div>
            <div className="col-md-10" id="main-container">
              <h2>Take Notes</h2>
              <body>
                <textarea
                  placeholder="Enter text to download"
                  id="dload-txt"
                  rows="15"
                  cols="60"
                ></textarea>
                <br />
                <input
                  placeholder="Enter file name to download as"
                  id="dload-fn"
                />
                <br />
                <br />
                <button id="dload" onClick={download}>Download</button>
              </body>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default TakeNotes;
