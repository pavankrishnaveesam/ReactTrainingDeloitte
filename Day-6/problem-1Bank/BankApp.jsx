import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BankApp(){
    const [amountValue, setAmount] = useState(0);

    let currentBalance = useSelector((state) => state.balance);
  
    const dispatch = useDispatch();


    function withdraw(){
        dispatch({type:"WITHDRAW",amount:amountValue});
        setAmount(0);
    }
    function deposit(){
        dispatch({type:"DEPOSIT",amount:amountValue});
        setAmount(0);
    }

    return(
        <div>
            <h1>Your balance:${(currentBalance).toFixed(2)}</h1>
            <input type="text" value={amountValue} onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={deposit}>deposit</button>
            <button onClick={withdraw}>withdraw</button>
        </div>
    )
    
}