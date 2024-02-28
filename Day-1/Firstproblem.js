import './App.css';

function App() {

  //1.  Create a react component to display student details in table format  (Single Student)
	//	a. Student Details :   sid, sname, course, age, total

  var student={sid:1,sname:"Pavan",course:"React",age:22,total:1000};

  
  return (
    <>
      <table border="2">
        <tr>
          <th colSpan="2">StudentDetails</th>
        </tr>
        <tr>
          <th>StudentId</th><td>{student.sid}</td>
        </tr>
        <tr>
          <th>StudentName</th><td>{student.sname}</td>
        </tr>
        <tr>
          <th>Course</th><td>{student.course}</td>
        </tr>
        <tr>
          <th>Age</th><td>{student.age}</td>
        </tr>
        <tr>
          <th>Total</th><td>{student.total}</td>
        </tr>
      </table>
    </>
  );
}

export default App;
