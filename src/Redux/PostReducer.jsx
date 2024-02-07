import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put";
import UseGet from "../Hooks/Get";
import UseDelete from "../Hooks/Delete";
import UsePost from "../Hooks/Post";
const initValPost={
    ArrayPost:[{
        
    id:0,
    tochen:"aaaaaa",
    isLike:false,

},
{
    id:1,
    tochen:"bbbbbbbb",
    isLike:false,
}
,{
    id:2,
    tochen:"ccccccccc",
    isLike:false,
   
}
]}
const PostSlice = createSlice({
name: "managerPost",
initialState:initValPost,
reducers:{
    update:(state,actions)=>{
        console.log("update");
        const put = UsePut()
               put('https://localhost:7015/api/PostsContrller/PutPost/'+actions.payload.item)
           },
   
       },
       Delete:(state,actions)=>{
           console.log("delete");
           const deleteItem = UseDelete()
           deleteItem('https://localhost:7015/api/PostsContrller/DeletePost/' + actions.payload.id)
   
       },
     
       Add: (state, actions) => {
           console.log("Add", state.ArrayPost);
           const post = UsePost()
           post("https://localhost:7015/api/PostsContrller/PostPosts", actions.payload.item)
           console.log(" after", state.ArrayPost);
   
       },
     
   
       Get: (state) => {
           const [get, data] = UseGet()
           get('https://localhost:7015/api/PostsContrller/GetPost')
           console.log(data);
           state.ArrayPost = data;
       }
    

})
export const {update, Delete, Add,Get} = PostSlice.actions
export default PostSlice.reducer