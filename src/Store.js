import { configureStore } from "@reduxjs/toolkit";
import dataValueReducer from "./DataSlice";

export const store = configureStore({
    reducer: {
        dataValue: dataValueReducer,
    },
})