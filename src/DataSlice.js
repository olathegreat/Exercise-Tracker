import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    valueOnDisplay:'',
    darkModeValue:false,
}


const DataSlice = createSlice({
    name:"dataValue",
    initialState,
    reducers:{
        addValueOnDisplay:(state, {payload})=>{
            state.valueOnDisplay =  payload
            console.log(state.valueOnDisplay);
        }
    }

})



export const {addValueOnDisplay} =  DataSlice.actions;
export const getDisplayValue = (state) => state.dataValue.valueOnDisplay;
export default DataSlice.reducer;