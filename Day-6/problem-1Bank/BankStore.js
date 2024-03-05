import { legacy_createStore as createStore } from 'redux';

const initialState = {
    balance: 500
};
let  updatedState = {};
//Create Reducer Function
const bankReducer=(state=initialState,action)=>{
    switch (action.type) 
    {
        case "DEPOSIT":
            updatedState.balance =  state.balance + parseFloat(action.amount);
            break;
            
        case "WITHDRAW":
            if(state.balance-parseFloat(action.amount)<500)  
            {
                alert("Min bal should be 500.00");
                updatedState.balance =  state.balance;
            }
            else
            {
                updatedState.balance =  state.balance - parseFloat(action.amount);
            }
            break;
        default:
           updatedState = state;
           break;
    }

    return updatedState;
}

//Create Store
const bankStore=createStore(bankReducer);
export default bankStore;