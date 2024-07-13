import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0,isShow:true }, action) => {
    switch (action.type) {
        case "increasement":
            return {
                ...state,
                counter:state.counter+1
            }
        case "decreasement":
            return {
                ...state,
                counter:state.counter-1
            }
        case "reset":
            return {
                ...state,
                counter:0
            }
        case "toggle":
            return {
                ...state,
                isShow:!state.isShow
            }
        
    }
        
    return state;
}
const store = createStore(counterReducer);

export default store;