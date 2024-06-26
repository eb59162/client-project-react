import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Delete, update, Add, Get } from "../Redux/todosreducer";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';


const Todo = () => {

  const dispatch = useDispatch();
  dispatch(Get());
  
  const arr = useSelector(x => x.ToDoSlice.ArrayToDo);
  const label={inputProps:{'aria-label':'Checkbox demo'}};
  const [openEditandDelete, SetOpenEditandDelete] = React.useState(false);
  const [open, SetOpen] = React.useState(false);
  const [id, SetId] = React.useState(0)
  const [name, SetName] = React.useState("")
  const [describe, SetDescribe] = React.useState("")
  const [date, SetDate] = React.useState("")
  const [cheked, SetCheked] = React.useState(false);
  const Item = {
    "Id": id,
    "Name": name,
    "Date": date,
    "Description": describe,
    "IsComplete": false
  }
  const handleClickOpen = () => {
    SetOpen(true);
  };

  const handleCloseSave = () => {

    alert("saving..;)")
    dispatch(Add({ item: Item }))
    handleClose();
  };
  const handleClose = () => {
    SetOpen(false);
  };

 const HandleDelete = (Id) => {
    dispatch(Delete({ id: Id }))
  }

  const handleClickOpenEdit = () => {
    SetOpenEditandDelete(true);
  };
  const handleCloseSaveEdit = () => {

    dispatch(update({item:Item}))
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
    dispatch(update({item:Item}))
    handleClose()
  };

const FormDialog = () => {
    return (
      <>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add a ToDo
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add A ToDo</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add your todo to this website, please enter your's todo details here. We
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
                id="describe"
                label="describe"
                type="text"
                fullWidth
                variant="standard"
                value={describe}
                onChange={(e) => {
                  SetDescribe(e.target.value)
                  console.log("describe", describe);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="date"
                label="date"
                type="text"
                fullWidth
                variant="standard"
                value={date}
                onChange={(e) => {
                  SetDate(e.target.value)
                  console.log("date", date);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleCloseSave}>Save</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </>
    )
  };
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
      <h1>The Tasks</h1>
      <br />

      {FormDialog()}
      {
        arr?.map((item) => {
          return (
            <div>
              <h1>Todo</h1>
              <span>name= {item.name}</span>
              <br />
              <span>describe= {item.describe}</span>
              <br />
              <span>date= {item.date}</span>
              <br />
              <span>isComplete ?{item.isComplete}</span>
              <br />
              <button onClick={() => {
                handleClickOpenEdit();
              }}>edit</button>
              <button onClick={() => {
                alert("delete")
                HandleDelete(item.Id)
              }}>מחיקה</button>
              {FormDialogEditAndDelete()}
            </div>
          )
        })
      }
    </>
  )
}
export default Todo;
