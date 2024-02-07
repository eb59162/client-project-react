import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Add, Delete, update, Get } from "../Redux/PostReducer";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';



const Post = () => {
  const dispatch = useDispatch();
  dispatch(Get())

  const [openEditandDelete, SetOpenEditandDelete] = React.useState(false);
  const arr = useSelector(x => x.PostSlice.ArrayPosts);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0)
  const [name, SetName] = React.useState("")
  const [tochen, SetTochen] = React.useState("")
  const [isLike, SetIsLike] = React.useState(false)


  const Item = {
    "Id": id,
    "Name": name,
    "Date": date,
    "Tochen": tochen,
    "IsLike": isLike
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSave = () => {

    alert("saving..;)")
    dispatch(Add({ item: Item }))
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const HandleDelete = (Id) => {
    dispatch(Delete({ id: Id }))
  }

  const handleClickOpenEdit = () => {
    SetOpenEditandDelete(true);
  };
  const handleCloseSaveEdit = () => {

    dispatch(update({ item: Item }))
    handleClose()
  }

  const HandleAdd = (item) => {
    dispatch(Add(item))
  }

  const handleCloseEditAndDelete = () => {
    SetOpenEditandDelete(false);
  };


  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    SetCheked(!cheked);
    dispatch(update({ item: Item }))
    handleClose()
  };
  const HandleEdit = (item) => {
    dispatch(update({ item: item }))
  }




  const FormDialog = () => {

    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add a Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add your post to this website, please enter your's todo details here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              fullWidth
              variant="standard"
              value={name}

              onChange={(e) => {
                SetName(e.target.value)
                console.log("name", name);
              }}

            />
            <TextField
              autoFocus
              margin="dense"
              id="tochen"
              label="tochen"
              type="text"
              fullWidth
              variant="standard"
              value={tochen}
              onChange={(e) => {
                SetTochen(e.target.value)
                console.log("tochen", tochen);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCloseSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

  const FormDialogEditAndDelete = () => {
    return (
      <>
        <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
          <Box sx={{ width: '300%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    {name}
                  </Typography>
                </Grid>
              </Grid>

              <Typography color="text.secondary" variant="body2">
                {describe}
              </Typography>
              <Divider variant="middle" />

              <Tooltip title="האם המשימה הושלמה">
                <Checkbox
                  checked={cheked}
                  onChange={handleCheckboxChange}
                />
              </Tooltip>
              <br />
              <br />
            </Box>
          </Box>
          <React.Fragment>
            <Dialog open={openEditandDelete} onClose={handleCloseEditAndDelete}>
              <DialogTitle>עדכון משימה</DialogTitle>
              <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="שם משימה"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="describe"
                  label="תוכן"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={describe}
                  onChange={(e) => SetDescribe(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="date"
                  label="תאריך"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={date}
                  onChange={(e) => SetDate(e.target.value)}
                />


              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEditAndDelete}>ביטול</Button>
                <Button onClick={handleCloseSaveEdit}>שמירה </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>


        </Grid>
      </>
    )
  }
  return (
    <>

      <br />
      {FormDialog()}
      {
        arr?.map((item) => {
          return (
            <div>
              <h1>Post</h1>

              <br />
              <span>תוכן הפוסט= {item.tochen}</span>
              <br />
              <span>isLike ?</span><input type="checkbox" />
              <br />

              <button onClick={() => {
                HandleEdit(item)
              }}>edit</button>

              <button onClick={() => {
                HandleDelete(item.id)
              }}>מחיקה</button>
              <button>שמור</button>
              {FormDialogEditAndDelete()
              
              }            
                          </div>

          )
        })
      }

    </>
  )

}
export default Post



