import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

function OutlinedCard({ description,openEditpopUp,setDescValue,setInputValue,setCollectionId}) {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => {
    setOpen(true);
    setCollectionId('')
    setDescValue('')
    setInputValue('')
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    setOpen(false);
  };

  return (
    <div className="cardContained">
      <Card variant="outlined">
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <div className="downloadStyle">
              <div className="downloadTitle">Download data</div>
              <IconButton aria-label="download">
                <CloudDownloadIcon
                  style={{
                    fontSize: 12,
                    display: "flex",
                    position: "absolute",
                  }}
                />
              </IconButton>
            </div>
            <div className="cardIconStyle">
              <Typography variant="body2" gutterBottom>
                87
              </Typography>
              <IconButton className="iconStyle" onClick={openEditpopUp}>
                <EditIcon
                  style={{
                    fontSize: 12,
                    display: "flex",
                    position: "absolute",
                  }}
                />
              </IconButton>
              <IconButton className="iconStyle" onClick={handleDeleteClick}>
                <DeleteIcon
                  style={{
                    fontSize: 12,
                    display: "flex",
                    position: "absolute",
                  }}
                />
              </IconButton>
            </div>
          </div>
          <div className="headerStyle">MY Collection</div>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} style={{display: "flex", marginLeft: "10rem"}}>
        <DialogTitle style={{fontWeight: "600", display: "flex", marginLeft: "9rem"}}>Delete Collection</DialogTitle>
        <DialogContent>
          <Grid container spacing={1} className="rootContainer" >
            <Grid item xs={12}>
              <Typography variant="body1" style={{display: "flex", marginLeft: "4rem"}}>
                Are you sure you want to delete this collection?
              </Typography>
            </Grid>
          <Grid container spacing={1} className="rootContainer">
            <Grid item xs={12}>
              <Typography variant="body1" style={{display: "flex", marginLeft: "8rem"}}>
                You won't able to undo this.
              </Typography>
            </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} className="rootContainer">
            <Grid item xs={6}>
              <Button
                onClick={handleDeleteConfirm}
                style={{display: "flex", border: "1px solid", width: "125%", color: "black", backgroundColor: "lightblue", marginBottom: "1rem"}}
              >
                Delete
              </Button>
              <Grid item xs={6}>
                <Button onClick={handleClose}  style={{display: "flex", border: "1px solid", width: "250%", color: "black", backgroundColor: "lightblue" }}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OutlinedCard;
