import { useState } from "react"
import { dataSericeObj } from "./dataservericeEmp";

export default function EmpApi(){

    const [empArray,setEmpArray] = useState([]);
    const [Emp,setEmp] = useState({empno:"",ename:"",job:"",sal:"",deptno:""});
    
    function handleChange(e) {
        setEmp(prevEmp => ({ ...prevEmp, [e.target.name]: e.target.value }));
    }    

    function getEmps(){
        dataSericeObj.getAllEmps().then(resData=>setEmpArray(resData.data));
    }

    function AddEmp(){
        let newEmp={empno:Emp.empno,ename:Emp.ename,job:Emp.job,sal:Emp.sal,deptno:Emp.deptno};
        dataSericeObj.addNewEmp(newEmp);    
        getEmps();
        setEmp({empno:"",ename:"",job:"",sal:"",deptno:""});
    } 

    function Select(id){
        dataSericeObj.getEmpById(id).then(resData=>{let {empno,ename,job,sal,deptno}=resData.data;setEmp({empno:empno,ename:ename,job:job,sal:sal,deptno:deptno});});
        
    }

    function Update(){ 

        dataSericeObj.updateEmpById({empno:Emp.empno,ename:Emp.ename,job:Emp.job,sal:Emp.sal,deptno:Emp.deptno},Emp.empno)
                     .then(()=>{getEmps();setEmp({empno:"",ename:"",job:"",sal:"",deptno:""});});

    }

    function handleDelete(id){
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to proceed?");

        if(result==true){
            dataSericeObj.deleteEmpById(id);
            getEmps();
            
        }
    }



    return (
        <>
        <input type="text" name="empno" placeholder="empno" value={Emp.empno} onChange={handleChange}/>
        <input type="text" name="ename" placeholder="ename" value={Emp.ename} onChange={handleChange}/>
        <input type="text" name="job" placeholder="job" value={Emp.job} onChange={handleChange}/>
        <input type="text" name="sal" placeholder="sal" value={Emp.sal} onChange={handleChange}/>
        <input type="text" name="deptno" placeholder="deptno" value={Emp.deptno} onChange={handleChange}/>
        <br/>
        <button onClick={getEmps}>Get Emps</button>
        <button onClick={AddEmp}>Add Emp</button>
        <button onClick={Update}>Update</button>
        <table border="2">
            <tr>
                <th>empno</th>
                <th>ename</th>
                <th>job</th>
                <th>sal</th>
                <th>deptno</th>
            </tr>
            {empArray.map(item=><tr key={item.empno}>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td><button onClick={()=>handleDelete(item.empno)}>Delete</button></td>
            <td><button onClick={()=>Select(item.empno)}>Select</button></td>
            
        </tr>)}
        </table>
        </>
    )
}