import React from "react";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put";
import UsePost from '../Hooks/Post'
import UseDelete from "../Hooks/Delete";
import UseGet from "../Hooks/Get";
const initValToDo = {
     ArrayToDo: []
}
console.log("arr=",initValToDo.ArrayToDo);

const ToDoSlice = createSlice({
    name: "managerToDo",
    initialState: initValToDo,
    reducers: {
        update: (state, actions) => {
            console.log("update");
            const put = UsePut();
            
            put("https://localhost:7015/api/ToDo/PutToDo/"+ actions.payload.item)
        },
        Add: (state, actions) => {
            console.log("Add", state.ArrayToDo);
            const post = UsePost()
            post("https://localhost:7015/api/ToDo/PostToDo", actions.payload.item)
            console.log(" after", state.ArrayToDo);

        },
        Delete: (state, actions) => {

            console.log("arr", state.ArrayToDo);
            const deleteItem = UseDelete()
            deleteItem("https://localhost:7015/api/ToDo/DeleteToDo/"+ actions.payload.id)

            console.log(actions.payload.id, "id");
            console.log("arr after delete", state.ArrayToDo);
        }
        ,
        
        Get: (state) => {
            const [get, data] = UseGet()
            get('https://localhost:7015/api/ToDo/GetToDo')
            console.log(data);
            state.ArrayToDo = data;
        }
    }
})
export const { update, Delete, Add,Get } = ToDoSlice.actions
export default ToDoSlice.reducer