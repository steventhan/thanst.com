import React, { Component } from "react";
import { Avatar, withStyles, Grid, Typography, TextField } from "material-ui";

const SearchBox = ({ text, onChange }) => (
  <TextField
    label="Search"
    placeholder="For example: 'machine learning', 'react', 'mongodb' etc."
    value={text}
    onChange={onChange}
    fullWidth
  />
)

export default SearchBox;
