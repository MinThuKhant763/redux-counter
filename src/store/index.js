import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter:0,isShow:true}
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increase(state) { state.counter++; },
        increaseby5(state,action){state.counter = state.counter+action.payload},
        decrease(state) {state.counter--},
        reset(state) {state.counter = 0 },
        toggle(state){state.isShow = !state.isShow },
    }
});

const store = configureStore({
    reducer:counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;