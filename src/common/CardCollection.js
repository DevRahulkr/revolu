import React, { useState } from "react";
import AddEditPopUp from "./AddEditPopUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutlinedCard from "./card";

function CardCollection({setInputValue, inputValue,descValue,setDescValue,collectionId, setCollectionId}) {
  const [collection, setCollection] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("up");
  const [open, setOpen] = useState(false);

  const [collectionArray, setCollectionArray] = useState([
    { name: "Collection 1", id: "collection1", description: "testui" },
    { name: "Collection 2", id: "collection2", description: "testui" },
    { name: "Collection 3", id: "collection3", description: "testui" },
    { name: "Collection 4", id: "collection4", description: "testui" },
    { name: "Collection 5", id: "collection5", description: "testui" },
  ]);

  function handleChange() {
    setCollection(!collection);
    setArrowDirection((prevDirection) =>
      prevDirection === "up" ? "down" : "up"
    );
  }

  function handleAdd() {
    setOpen(true);
    setInputValue("");
    setDescValue("");
    setCollectionId("");
  }

  function handleClose() {
    setOpen(false);
  }

  function onSubmit(value) {
    const filteredArray = collectionArray?.filter((e) => e.id !== value?.id);
    setCollectionArray([...filteredArray, value]);
    setOpen(false);
  }

  // function OnEdit(id, name, description) {
  //   //   const upDatedValue = collectionArray.filter((e)=>e.id === id)
  //   //   upDatedValue[0].name === name
  //   //   upDatedValue[0].description === description
  //   //   setCollectionArray([...collectionArray, upDatedValue[0]])
  //   setOpen(true);
  //   setInputValue(name);
  //   setDescValue(description);
  //   setCollectionId(id);
  // }

  return (
    <>
      <div className="mainCollection">
        <div className="parentDiv">
          <span className="myCollection">My Collection</span>
          <IconButton onClick={handleChange}>
            {arrowDirection === "up" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </div>
        {collection && (
          <div>
            {collectionArray?.map((e, index) => (
              <div className="collectionStyle">
                <div className="folderCollection">
                  <FolderOpenIcon style={{fontSize: "18", display: "flex", marginTop: "0.3rem"}} />
                  <div key={e.id} className="collectionItem">
                    {e.name}
                  </div>
                </div>
                <IconButton style={{display: "flex", marginLeft: "2rem"}}>
                  <KeyboardArrowLeftIcon  />
                </IconButton>
                {/* <div onClick={() => OnEdit(e.id, e.name, e.description)}>
                  Edit
                </div> */}
              </div>
            ))}
            <hr className="separator" />
            <div className="addLink" onClick={handleAdd}>
              <IconButton className="iconStyle">
                <CreateNewFolderIcon />
              </IconButton>
              <div className="newCollection">Add Collection</div>
            </div>
          </div>
        )}
        <AddEditPopUp
          open={open}
          onSubmit={onSubmit}
          handleClose={handleClose}
          collectionArray={collectionArray}
          setInputValue={setInputValue}
          setDescValue={setDescValue}
          inputValue={inputValue}
          descValue={descValue}
          collectionId={collectionId}
        />
      </div>
       {collectionId ?<OutlinedCard setOpen={setOpen} setInputValue={setInputValue} setDescValue={setDescValue} setCollectionId={setCollectionId} handleAdd={handleAdd}/> : '' }
    </>
  );
}

export default CardCollection;
