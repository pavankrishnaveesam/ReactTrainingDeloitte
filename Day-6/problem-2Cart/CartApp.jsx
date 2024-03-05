import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartApp(){
    
    
    
    const dispatch = useDispatch();

    function removeitem(){
        console.log("remove clicked");
        dispatch({type:"REMOVEITEM"});
    }
    function additem(){
        console.log("add clicked");
        dispatch({type:"ADDITEM"});
    }

    return(
        <div>
            
            
            <button onClick={additem}>Additem</button>
            <button onClick={removeitem}>Removitem</button>
        </div>
    )
    
}