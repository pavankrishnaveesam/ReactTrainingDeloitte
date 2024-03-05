import { legacy_createStore as createStore } from 'redux';

const initialState = {
    count: 0
};
let  updatedState = {};
//Create Reducer Function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM":
            return {
                ...state,
                count: state.count + 1
            };

        case "REMOVEITEM":
            if(state.count==0){
                alert('No cartItems');
                return state;
            }
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            };

        default:
            return state;
    }
}
//Create Store
const cartStore=createStore(cartReducer);
export default cartStore;