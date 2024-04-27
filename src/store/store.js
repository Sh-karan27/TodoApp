import { configureStore } from "@reduxjs/toolkit";

import projectReducer from "../slices/projectSlice"

export default configureStore({
    reducer:{
        project:projectReducer
    }
})