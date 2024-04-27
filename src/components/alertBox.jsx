import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProject } from '../slices/projectSlice';



export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  

  const handleOnChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProjectText = () => {
    if (textInput.trim() !== "") {
      dispatch(
        addProject({
          id: Math.random().toString(36).substr(2,9),
          text: textInput.trim(),
          completed: false,
        })
      );
      setTextInput("");
      setOpen(false)
    }
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Project in Sh_Todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <input
            type="text"
            placeholder="Add project"
            onChange={handleOnChange}
            value={textInput}
          />
          <button onClick={addProjectText}>Add</button>
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {/* <Button onClick={handleClose} autoFocus>
            Add
          </Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
