// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';



// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);
//   const [id,setId]=React.useState(0)
// const [name,SetName]=React.useState("")
// const [describe,SetDescribe]=React.useState("")
// const [date,SetDate]=React.useState("")
// const [item,setItem]=React.useState({})
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleCloseSave = () => {
 
//     alert("saving..;)")
//     setId(id+1)
//     setItem({
//         id:id,
//         name:name,
//         describe:describe,
//         date:date,
//         isComplete:false
//     })
  
//     console.log("the details",id,describe,name,date);
    
//     // HandleAdd(item)
//     setOpen(false);
//   };
//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Add a ToDo
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To add your todo to this website, please enter your's todo details here. We
//             will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="name of todo"
//             type="text"
//             fullWidth
//             variant="standard"
//             value=""
//              onChange={(e)=>{SetName(e.target.value)
//             console.log("name",name);} }
 
//           />
//            <TextField
//             autoFocus
//             margin="dense"
//             id="date"
//             label="date of todo"
//             type="date"
//             fullWidth
//             variant="standard"
//             value=""
//             onChange={(e)=>{SetDate(e.target.value)
//                 console.log("date",date);} }
//           />
//            <TextField
//             autoFocus
//             margin="dense"
//             id="describe"
//             label="describe"
//             type="string"
//             fullWidth
//             variant="standard"
//             value=""
//             onChange={(e)=>{SetDescribe(e.target.value)
//                 console.log("describe",describe);} }
//           />
      
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleCloseSave}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }