import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put";
import UseGet from "../Hooks/Get";
import UseDelete from "../Hooks/Delete";
import UsePost from "../Hooks/Post";
const initialUser={
  arrayUser:[{
        
    id:0,
    name:"aaaaaa",
    email:"false",
    phone:"4532",
    address:"rewrwe"
},
{
    id:1,
    name:"aaaaaa",
    email:"false",
    phone:"4532",
    address:"rewrwe"
}
,{
    id:2,
    name:"aaaaaa",
    email:"false",
    phone:"4532",
    address:"rewrwe"
   
}
]}
const UserSlice = createSlice({
name: "managerUser",
initialState:initialUser,
reducers:{
    update:(state,actions)=>{
        console.log("update");
        const put = UsePut()
               put('https://localhost:7015/api/PostsContrller/PutUser/'+actions.payload.item)
           },
   
       },
       Delete:(state,actions)=>{
           console.log("delete");
           const deleteItem = UseDelete()
           deleteItem('https://localhost:7015/api/PostsContrller/DeleteUser/' + actions.payload.id)
   
       },
     
       Add: (state, actions) => {
           console.log("Add", state.arrayUser);
           const post = UsePost()
           post("https://localhost:7015/api/PostsContrller/PostUsers", actions.payload.item)
           console.log(" after", state.arrayUser);
   
       },
     
   
       Get: (state) => {
           const [get, data] = UseGet()
           get('https://localhost:7015/api/PostsContrller/GetUser')
           console.log(data);
           state.arrayUser = data;
       }
    

})
export const {update, Delete, Add,Get} = PostSlice.actions
export default UserSlice.reducer