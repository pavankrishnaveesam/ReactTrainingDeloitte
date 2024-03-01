import axios from 'axios';

export let dataSericeObj = 
{
    getAllEmps,
    addNewEmp,
    getEmpById,
    deleteEmpById,
    updateEmpById
};

let url = "http://localhost:3600/Emps/";

function getAllEmps(){
    return axios.get(url);
}

function addNewEmp(deptObj){
    return axios.post(url,deptObj);
}

function getEmpById(id){
    return axios.get(url+id);
}

function deleteEmpById(id){
    return axios.delete(url+id);
}

function updateEmpById(deptObj,id){
    return axios.put(url+id,deptObj);
}