import { useState } from "react"
import { dataSericeObj } from "./dataservice";

export default function CRUD(){

    const [deptArray,setDeptArray] = useState([]);
    const [dept,setDept] = useState({deptno:"",dname:"",loc:""});
    
    function handleChange(e) {
        setDept(prevDept => ({ ...prevDept, [e.target.name]: e.target.value }));
    }    

    function getDept(){
        dataSericeObj.getAllDepartments().then(resData=>setDeptArray(resData.data));
    }

    function AddDept(){
        let newDept={deptno:dept.deptno,dname:dept.dname,loc:dept.loc};
        dataSericeObj.addNewDeptartment(newDept);
        getDept();
        setDept({deptno:"",dname:"",loc:""});
    } 

    function Select(id){
        dataSericeObj.getDeptById(id).then(resData=>{let {deptno,dname,loc}=resData.data;setDept({deptno:deptno,dname:dname,loc:loc});});
        
    }

    function Update(){ 

        dataSericeObj.updateDeptById({deptno:dept.deptno,dname:dept.dname,loc:dept.loc},dept.deptno)
                     .then(()=>{getDept();setDept({deptno:"",dname:"",loc:""});});

    }

    function handleDelete(id){
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to proceed?");

        if(result==true){
            dataSericeObj.deleteDeptById(id);
            getDept();
            
        }
    }



    return (
        <>
        <input type="text" name="deptno" placeholder="deptno" value={dept.deptno} onChange={handleChange}/>
        <input type="text" name="dname" placeholder="dname" value={dept.dname} onChange={handleChange}/>
        <input type="text" name="loc" placeholder="loc" value={dept.loc} onChange={handleChange}/>
        <br/>
        <button onClick={getDept}>Get Emps</button>
        <button onClick={AddDept}>Add Emp</button>
        <button onClick={Update}>Update</button>
        <table border="2">
            <tr>
                <th>deptno</th>
                <th>dname</th>
                <th>loc</th>
            </tr>
            {deptArray.map(item=><tr key={item.deptno}>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.loc}</td>
            <td><button onClick={()=>handleDelete(item.deptno)}>Delete</button></td>
            <td><button onClick={()=>Select(item.deptno)}>Select</button></td>
            
        </tr>)}
        </table>
        </>
    )
}