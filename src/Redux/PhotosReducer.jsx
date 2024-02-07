import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put"; 
import UsePost from "../Hooks/Post";
import UseGet from "../Hooks/Get";
import UseDelete from "../Hooks/Delete";
const initValPhoto={
   ArrayPhoto :[{
    id:0,
    url:"E:\פרויקט ריאקט כללי\ריאקט פרויקט  חדש\src\photos-example\(Reka.us)51.jpg",
    title: 'Breakfast',

},
{
    id:1,
     url:"E:\פרויקט ריאקט כללי\ריאקט פרויקט  חדש\src\photos-example\(Reka.us)Aitutaki,_Cook_Islands.jpg",
     title: 'Breakfast',
}

]}
const PhotoSlice = createSlice({
name: "managerPhoto",
initialState:initValPhoto,
reducers:{
    update:(state,actions)=>{
        console.log("update");
        const put = UsePut()
               put('https://localhost:7015/api/Photos/PutPhotos/'+ actions.payload.item)
           },
   
       },
       Delete:(state,actions)=>{
           console.log("delete");
           const deleteItem = UseDelete()
           deleteItem('https://localhost:7015/api/Photos/DeletePhoto/' + actions.payload.id)
   
       },
     
       Add: (state, actions) => {
           console.log("Add", state.ArrayPhoto);
           const post = UsePost()
           post("https://localhost:7015/api/Photos/PostPhoto", actions.payload.item)
           console.log(" after", state.ArrayPhoto);
   
       },
     
   
       Get: (state) => {
           const [get, data] = UseGet()
           get('https://localhost:7015/api/Photos/GetPhotos')
           console.log(data);
           state.ArrayPhoto = data;
       }
    

})
export const {update} = PhotoSlice.actions
export default PhotoSlice.reducer