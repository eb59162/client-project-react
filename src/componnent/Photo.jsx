// import React from "react";
// import { update ,Get,Add,Delete} from "../Redux/todosreducer";
// import { useDispatch ,useSelector} from "react-redux";
// // import { Reducer } from "@reduxjs/toolkit";
// // import { createSlice } from '@reduxjs/toolkit'
// const Photo = () => {

//     const dispatch=useDispatch();
//     dispatch(Get())
//    const arr = useSelector(x => x.PhotoSlice.ArrayPhoto)

// const HandleEdit=(item)=>{
//     dispatch(update({item:item}))
// }
// const HandleDelete=(id)=>{
//     dispatch(Delete({id:id}))
// }

// const HandleAdd=(item)=>{
//     dispatch(Add({id:item.id}))
// } 
// return (
//         <>
        
//         <br />
//         <button
//         onClick={()=>{HandleAdd()}
            
//         }>הוספה</button>
//             {
//                 arr?.map((item) => {
//                     return (
//                         <>
//                         <img 
//                          srcSet={`${item.url}`}
//                          src={`${item.url}`}
//                          alt={item.title}
//                          loading="lazy"
//                         />
//                         {
                           
//                              console.log(item.url)
//                         }
//                         <div>
//                              <h1>Photo</h1>
                           
//                          <br/>
//             <img src="./D:/פרויקט ריאקט כללי/ריאקט פרויקט  חדש/src\photos-example/(Reka.us)51.jpg" alt="no photo" />  
                    
//             <br />
//                            <br />
//                             <button onClick={()=>{
//                                 HandleEdit(item)
//                             }}>edit</button> 
                            
//                              <button onClick={()=>{
//                                 HandleDelete(item.id)
//                              }}>מחיקה</button>
//                             <button>שמור</button>
//                         </div>
//                         </>
//                     )
//                 })
//             }

//         </>
//     )

// }
// export default Photo
