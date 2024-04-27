import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice({
    name:"project",
    initialState:[],
    reducers:{
        addProject:(state,action)=>{
            state.push(action.payload)
        },
        deleteProject:(state,action)=>{
           return  state.filter(project => project.id !== action.payload)

        },
        toggleProject:(state,action)=>{
            const project = state.find(project=>project.id=== action.payload)
            if(project){
                project.completed =!project.completed
            }
        }
    }
})


export const {addProject,deleteProject,toggleProject} = projectSlice.actions
console.log(projectSlice.actions)
export default projectSlice.reducer
