import { useState } from "react"

export default function CRUD(){

    const [empArray,setEmpArray] = useState([]);
    const [emp,setEmp] = useState({empid:"",empname:"",deptno:""});
    
    function handleChange(e) {
        setEmp(prevEmp => ({ ...prevEmp, [e.target.name]: e.target.value }));
    }    

    function getEmps(){
        let data = [
            { empid: 101, empname: "Pavan", deptno: "1" },
            { empid: 102, empname: "Siddhi", deptno: "2" },
            { empid: 103, empname: "Aditi", deptno: "3" },
            { empid: 104, empname: "Aaditya", deptno: "4" },
        ];
        setEmpArray(data);
    }

    function AddEmp(){
        let newEmp={empid:emp.empid,empname:emp.empname,deptno:emp.deptno};
        setEmpArray([...empArray,newEmp]);
        setEmp({empid:"",empname:"",deptno:""});
    } 

    function Select(id){
        let dummy=[...empArray];
        let {empid,empname,deptno}=dummy.find(item=>item.empid==id);
        setEmp({empid:empid,empname:empname,deptno:deptno});
    }

    function Update(){
        let dummy=[...empArray];
        let index=dummy.findIndex(item=>item.empid==emp.empid);
        dummy[index].empid=emp.empid;
        dummy[index].empname=emp.empname;
        dummy[index].deptno=emp.deptno;
        setEmpArray(dummy);
        setEmp({empid:"",empname:"",deptno:""});
    }

    function handleDelete(id){
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to proceed?");

        if(result==true){
            let dummy=[...empArray];
            let index=dummy.findIndex(item=>item.empid==id);
            dummy.splice(index,1);
            setEmpArray(dummy);
        }
    }



    return (
        <>
        <input type="text" name="empid" placeholder="Empno" value={emp.empid} onChange={handleChange}/>
        <input type="text" name="empname" placeholder="Emp Name" value={emp.empname} onChange={handleChange}/>
        <input type="text" name="deptno" placeholder="Deptno" value={emp.deptno} onChange={handleChange}/>
        <br/>
        <button onClick={getEmps}>Get Emps</button>
        <button onClick={AddEmp}>Add Emp</button>
        <button onClick={Update}>Update</button>
        <table border="2">
            <tr>
                <th>EmployeeId</th>
                <th>Employee Name</th>
                <th>Dept Number</th>
            </tr>
            {empArray.map(item=><tr>
            <td>{item.empid}</td>
            <td>{item.empname}</td>
            <td>{item.deptno}</td>
            <td><button onClick={()=>handleDelete(item.empid)}>Delete</button></td>
            <td><button onClick={()=>Select(item.empid)}>Select</button></td>
            
        </tr>)}
        </table>
        </>
    )
}