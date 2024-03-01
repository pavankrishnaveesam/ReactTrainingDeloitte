import axios from 'axios';

export let dataSericeObj = 
{
    getAllDepartments,
    addNewDeptartment,
    getDeptById,
    deleteDeptById,
    updateDeptById
};

let url = "http://localhost:3500/depts/";

function getAllDepartments(){
    return axios.get(url);
}

function addNewDeptartment(deptObj){
    return axios.post(url,deptObj);
}

function getDeptById(id){
    return axios.get(url+id);
}

function deleteDeptById(id){
    return axios.delete(url+id);
}

function updateDeptById(deptObj,id){
    return axios.put(url+id,deptObj);
}