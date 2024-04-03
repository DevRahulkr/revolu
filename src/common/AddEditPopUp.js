// import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FieldTitle from "./FieldTitle";

import TextField from "@mui/material/TextField";

function AddEditPopUp({
  open,
  handleClose,
  onSubmit,
  descValue,
  inputValue,
  setInputValue,
  setDescValue,
  collectionId,
}) {

  const handleChange = (event) => {
    if (event.target.id === "Desc") {
      setDescValue(event.target.value);
    } else if (event.target.id === "Name") {
      setInputValue(event.target.value);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <DialogTitle>
        {collectionId ? "Edit Collection" : "New Collection"}
      </DialogTitle>
      <DialogContent>
        <div className="fieldContainer">
          <FieldTitle title="Collection Name" isMandatory/>
        </div>
        <TextField
          id="Name"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
        />
       
        <div className="descriptionStyle">
          <FieldTitle title="Description" isMandatory/>
        </div>
        <TextField
          id="Desc"
          value={descValue}
          onChange={handleChange}
          multiline
          maxRows={4}
        />
      </DialogContent>
      <DialogActions className="submitButtonStyle">
        <Button onClick={handleClose} className="buttonStyle">
          <div className="closeStyle">close</div>
        </Button>
        <Button
          onClick={() =>
            onSubmit({
              name: inputValue,
              description: descValue,
              id: collectionId ? collectionId : inputValue.replace(/ /g, ""),
            })
          }
          className="buttonStyle"
        >
          <div className="closeStyle">{collectionId? 'Save Changes' : 'Create Collection'}</div>
          
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEditPopUp;
