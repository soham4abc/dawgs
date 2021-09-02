import { Component } from "react";
import PostData from "./data.json";
import "./display.css";

class Contests extends Component {
  render() {
    return (
      <div className="container">
        <h1>Contests details</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Competition</th>
              <th scope="col">Link</th>

              <th scope="col">Platform</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {PostData.map((postDetail, index) => {
                  return <h6>{postDetail.name}</h6>;
                })}
              </td>
              <td>
                {PostData.map((postDetail, index) => {
                  return (
                    <div>
                      <a href={postDetail.url} target="_blank" rel="noreferrer">
                        link
                      </a>
                    </div>
                  );
                })}
              </td>
              <td>
                {PostData.map((postDetail, index) => {
                  return <h6>{postDetail.site}</h6>;
                })}
              </td>
              <td>
                {PostData.map((postDetail, index) => {
                  return <h6>{postDetail.start_time}</h6>;
                })}
              </td>
              <td>
                {PostData.map((postDetail, index) => {
                  return <h6>{postDetail.end_time}</h6>;
                })}
              </td>
            </tr>
          </tbody>
        </table>

        {/* {PostData.map((postDetail,index)=>{
                   return<h2>{postDetail.name}</h2> 
                })} */}
      </div>
    );
  }
}

export default Contests;
