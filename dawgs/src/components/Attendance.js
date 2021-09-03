import "./attendance.css";
function Attendance(){
    return(
        <div className="container">
          <h2>Attendance Details</h2>
        <h6>In order to view the attendance sheet click the link below:</h6>
        <button className="btn btn-outline-dark">
        <a className="attbtn" href="https://localhost/dawgs" target="_blank">Attendance Sheet</a>
        </button>
        <br></br>
        <br></br>
        <h7>NB: In order to give your attendance run the python script on your computer</h7>
        
          <li>Make sure SQL server is running </li>
          <li>You have all the required Tables</li>
          <li>Make sure all the required Python packages are installed</li>
          <li>Run the driver.py to open camera and give your attendance</li>
        
        
      </div>
    )
}

export default Attendance;