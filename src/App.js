import "./App.css";
import React, { useState } from "react";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OutlinedCard from "./common/card";
import dummydata from "./common/dummydata.json";
import CardCollection from "./common/CardCollection";

function App() {
  const [data, setData] = React.useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [collectionId, setCollectionId] = useState("");
  React.useEffect(() => {
    if (dummydata) {
      setData(dummydata);
    }
  }, []);
  return (
    <div className="App">
      <div className="appHeader">
        <nav className="navbar">
          <div className="nav-icons">
            <i>
              <FilterVintageIcon />
            </i>
          </div>
          <ul className="nav-list">
            <li className="nav-item">Material</li>
            <li className="nav-item">Elements</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Manufacturer</li>
            <li className="nav-item">Collections</li>
          </ul>
          <div className="nav-icons">
            <l>
              <AccountCircleIcon />
            </l>
          </div>
        </nav>
      </div>
      <div className="StyledHr"></div>
      <div className="appBody">
        <div className="leftBody">
          <CardCollection setInputValue={setInputValue} inputValue={inputValue} descValue={descValue} setDescValue={setDescValue} collectionId={collectionId}  setCollectionId={setCollectionId}/>
          </div>
        <div className="rightBody">
          <div className="collection">
            <div className="headerName">My Collection</div>
            <div className="contents">Introducing collections: the ability to organise your materials, your way.</div>
          </div>
          <hr className="separator" />
          <div className="cardContainer">
          {data?.map((e) => (
            <OutlinedCard title={e.name} description={e.description} eventId = {e.id} setInputValue={setInputValue} setDescValue={setDescValue} setCollectionId={setCollectionId}/>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
