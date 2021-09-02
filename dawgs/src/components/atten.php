<!DOCTYPE html>
<html>
    <head>
        <title>
            Attendance Sheet
        </title>
        <style type="text/css">
            table{
                border-collapse: collapse;
                width: 100%;
                color:#d96459;
                font-family :monospace;
                font-size: 25px;
                text-align: left;
            }
            th{
                background-color: #d96459;
                color: white;

            }
        </style>
    </head>
    <body>
        <h2 style="text-align: center; color:#d96459;">Attendance Sheet</h2>
        <table>
            <th>
                Name
            </th>
            <th>
                Date
            </th>
            <th>
                Time
            </th>
            <?php
            $conn=mysqli_connect("localhost","root","","attendance");
            if($conn-> connect_error){
                die("Connection Failed:". $conn->connect_error);
            }
            $sql= "SELECT Name,Date,Time from results";
            $result=$conn->query($sql);

            if($result -> num_rows >0){
                while($row=$result->fetch_assoc()){
                    echo "<tr><td>".$row["Name"]."</td><td>". $row["Date"] . "</td><td>" .$row["Time"] . "</td></tr>";
                }
                echo "</table>";
            }
            else{
                echo "0 result";
            }
            ?>
        </table>
    </body>
</html>
