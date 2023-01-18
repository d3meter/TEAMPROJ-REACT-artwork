import React from "react";
import "./Header.css";
import {
  TextField,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import harvardLogo from "./../pub_img/harvard_art_museum_logo.jpg"

function Header({ changeWorkType, changeTitle }) {
  const [workType, setWorkType] = useState("painting");
  const [titleChange, setTitleChange] = useState("");

  const handleChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitleChange(event.target.value);
  };

  useEffect(() => {
    changeWorkType(workType);
  }, [workType]);

  useEffect(() => {
    changeTitle(titleChange);
  }, [titleChange]);

  return (
    <div className="Header">
      <div className="header-section-one">
      <Link to={"/"}>Home</Link>
      <Link to={"/favorite"}>My favorites</Link>

      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-readonly-label">
          Type of artwork
        </InputLabel>
        <Select
          value={workType}
          label="Type of artwork"
          onChange={handleChange}
        >
          <MenuItem value="painting">Painting</MenuItem>
          <MenuItem value="statue">Statue</MenuItem>
          <MenuItem value="drawing">Drawing</MenuItem>
          <MenuItem value="photograph">Photograph</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="tf-title"
        label="search for title"
        variant="outlined"
        onChange={handleChangeTitle}
        value={titleChange}
      />
      </div>
      <div className="header-section-two">
        <img className="harvard-logo" src={harvardLogo} alt="" />
      </div>
    </div>
  );
}

export default Header;
