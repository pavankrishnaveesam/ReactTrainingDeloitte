import logo from './logo.svg';
import './App.css';

function App() {
  //2. Create a react component to display doctors details in the table format. 	(Array of Objects)
	//		a. doctorId
	//		b. doctorName
	//		c. designation
  //		d. experience
	//		e. contactNumber

  var doctordetails=
  [ {doctorId:1,doctorName:"Pavan",designation:"MD",experience:5,contactNumber:"9898767612"},
    {doctorId:2,doctorName:"Aditi",designation:"MBBS",experience:4,contactNumber:"7342772775"},
    {doctorId:3,doctorName:"Siddhi",designation:"MD",experience:3,contactNumber:"8347827747"},
    {doctorId:4,doctorName:"Aaditya",designation:"MBBS",experience:2,contactNumber:"7832477310"}
  ];


  var resultArray=doctordetails.map(item=><tr>
    <td>{item.doctorId}</td>
    <td>{item.doctorName}</td>
    <td>{item.designation}</td>
    <td>{item.experience}</td>
    <td>{item.contactNumber}</td>
  </tr>);
  
  return (
    <>
      <table border="2">
        <tr>
          <th>doctorId</th>
          <th>doctorName</th>
          <th>designation</th>
          <th>experience</th>
          <th>contactNumber</th>
        </tr>
        {resultArray}
      </table>
    </>
  );
}

export default App;
