// import React from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import { Get, Delete, update, Add } from "../Redux/UserRducuers";

// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// // import FaceIcon from '@mui/icons-material/Face';
// import Tooltip from '@mui/material/Tooltip';
// import { Reducer } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
// import FormDialog from '.dialog';

// const User = () => {

//     const dispatch = useDispatch();
//     dispatch(Get());

//     const arr = useSelector(a => a.UserSlice.arrayUser);

//     const HandleDelete = (id) => {
//         dispatch(Delete({ id: id }))
//     }
//     const HandleEdit = (item) => {
//         dispatch(update({ item: item }))
//     }
//     const HandleAdd = (item) => {
//         dispatch(Add({ item: item }))
//     }

//       const handleClickOpenEdit = () => {
//         SetOpen(true);
//       };
//       const handleClose = () => {
//         SetOpen(false);
//       };
   
      
//       const handleCloseSaveEdit = () => {
//         dispatch(Edit({ item: item }))
//         handleClose()
//       }
//       const handleCheckboxChange = () => {
//         SetCheked(!cheked);
//         dispatch(Edit({ item: item }))
//       };
    
//     const handleCloseSave = () => {

//         alert("saving..;)")
//         setId(id + 1)
//         SetItem({
//             id: id,
//             title: title,
//             email: email,
//             phone: phone,
//             address: address,
//         })

//         HandleAdd(item)
//         setOpen(false);


//     const FormDialog = () => {
//         const [open, setOpen] = React.useState(false);
//         const [id, setId] = React.useState(0)
//         const [title, SetTitle] = React.useState("")
//         const [email, SetEmail] = React.useState("")
//         const [phone, SetPhone] = React.useState("")
//         const [item, SetItem] = React.useState({})
//         const [address, SetAddress] = React.useState("")

 
//         const handleClickOpen = () => {
//             setOpen(true);
//         };
//         const handleClose = () => {
//             setOpen(false);
//         };
//         const handleCloseSave = () => {

//             alert("saving..;)")
//             setId(id + 1)
//             SetItem({
//                 id: id,
//                 title: title,
//                 email: email,
//                 phone: phone,
//                 address: address,
//             })

//             HandleAdd(item)
//             setOpen(false);
//         };
//         return (

//             <React.Fragment>
//                 <Button variant="outlined" onClick={handleClickOpen}>
//                     Add a User
//                 </Button>
//                 <Dialog open={open} onClose={handleClose}>
//                     <DialogTitle>Subscribe</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             To add your user to this website, please enter your's todo details here. We
//                             will send updates occasionally.
//                         </DialogContentText>
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="title"
//                             label="title"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={title}

//                             onChange={(e) => {
//                                 SetTitle(e.target.value)
//                                 console.log("title", title);
//                             }}

//                         />
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="email"
//                             label="email"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={date}
//                             onChange={(e) => {
//                                 SetEmail(e.target.value)
//                                 console.log("email", email);
//                             }}
//                         />
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="phone"
//                             label="phone"
//                             type="number"
//                             fullWidth
//                             variant="standard"
//                             value={date}
//                             onChange={(e) => {
//                                 SetPhone(e.target.value)
//                                 console.log("phone", phone);
//                             }}
//                         />
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="address"
//                             label="address"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={date}
//                             onChange={(e) => {
//                                 SetAddress(e.target.value)
//                                 console.log("address", address);
//                             }}
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose}>Cancel</Button>
//                         <Button onClick={handleCloseSave}>Save</Button>
//                     </DialogActions>
//                 </Dialog>
//             </React.Fragment>
//         );
//     }
//     //עריכה
//     const PutToDo=()=>{

    
//     return (
//         <>
//           <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
//             <Box sx={{ width: '300%', maxWidth: 360, bgcolor: 'background.paper' }}>
//               <Box sx={{ my: 3, mx: 2 }}>
//                 <Grid container alignItems="center">
//                   <Grid item xs>
//                     <Typography gutterBottom variant="h4" component="div">
//                       {name}
//                     </Typography>
//                   </Grid>
//                 </Grid>
    
//                 <Typography color="text.secondary" variant="body2">
//                   {describe}
//                 </Typography>
//                 <Divider variant="middle" />
    
//                 <Tooltip title="האם המשימה הושלמה">
//                   <Checkbox
                   
//                     checked={cheked}
//                     onChange={handleCheckboxChange}
//                   />
//                 </Tooltip>
//                 <br />
//                 <br />
//               </Box>
//             </Box>
//             <React.Fragment>
//               <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>עדכון משימה</DialogTitle>
//                 <DialogContent>
//                   <DialogContentText>
//                   </DialogContentText>
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="name"
//                     label="שם משימה"
//                     type="text"
//                     fullWidth
//                     variant="standard"
//                     value={name}
//                     onChange={(e) => SetName(e.target.value)}
//                   />
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="describe"
//                     label="תוכן"
//                     type="text"
//                     fullWidth
//                     variant="standard"
//                     value={describe}
//                     onChange={(e) => SetDescirbe(e.target.value)}
//                   />
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="date"
//                     label="תאריך"
//                     type="text"
//                     fullWidth
//                     variant="standard"
//                     value={date}
//                     onChange={(e) => SetDate(e.target.value)}
//                   />
    
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleClose}>ביטול</Button>
//                   <Button onClick={handleCloseSaveEdit}>שמירה </Button>
//                 </DialogActions>
//               </Dialog>
//             </React.Fragment>
    
    
//           </Grid>
//         </>
//       )}
//     return (
//         <>

//             <br />
//             {FormDialog()}
//             {
//                 arr?.map((item) => {
//                     return (
//                         <div>

//                             <h1>User</h1>
//                             <span>name= {item.name}</span>
//                             <br />
//                             <span>phone= {item.phone}</span>
//                             <br />
//                             <span>address= {item.address}</span>
//                             <br />
//                             <span>email= {item.email}</span>
//                             <br />

//                             <br />
//                             <button onClick={() => {
//                                 HandleEdit(item)
//                             }}>edit</button>

//                             <button onClick={() => {
//                                 HandleDelete(item.id)
//                             }}>מחיקה</button>
//                          {PutToDo()}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )

// }}
// export default User
