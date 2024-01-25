import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {id: 1, title: "Task1", category: "open"},
        {id: 2, title: "Task2", category: "pending"},
        {id: 3, title: "Task3", category: "inproge"},
        {id: 4, title: "Task4", category: "progress"},
    ],
    tasksModal : false
}

const tasksSlice = createSlice({
    name: "counter", 
    initialState,
    reducers: {
        openModal(state){
            state.tasksModal = true
        },
        toggle(state) {
            state.tasksModal = false
        },
        addNewTask(state, action){
            state.tasks.push(action.payload)
        },
        deleteTask(state, action){
            let {id} = action.payload
            let delete_task = state.tasks.filter((item)=> item.id !== id)
            state.tasks = delete_task
        },
        updateTask(state, action){
            const {id, title, category} = action.payload
            let single_task = state.tasks.find((item)=> item.id === id)
            console.log(single_task);
            single_task.title = title
            single_task.category = category
        }
    }
})

export const {openModal, toggle, addNewTask, deleteTask, updateTask} = tasksSlice.actions
export default tasksSlice.reducer