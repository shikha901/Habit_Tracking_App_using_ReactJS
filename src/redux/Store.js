import { configureStore } from "@reduxjs/toolkit";
import HabitReducer from "./reducer/HabitReducer";

const Store = configureStore({
    reducer:{
        habits:HabitReducer
    }
})

export default Store