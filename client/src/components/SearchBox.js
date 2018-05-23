import React, { Component } from "react";
import { Avatar, withStyles, Chip, Grid, InputAdornment, IconButton, Typography, TextField,
  Select, MenuItem } from "@material-ui/core";
import { Clear } from "@material-ui/icons"

const keywords = ["pytorch", "machine learning"]

const styles = {
}

const SearchBox = ({ text, classes, onChange, onClearButtonClick }) => (
  <TextField
    label="Search"
    helperText="Keywords can be comma-separated. For example: machine learning, react, mongodb"
    value={text}
    onChange={onChange}
    fullWidth
    InputProps={{
      endAdornment:  (text !== "" &&
        <InputAdornment position="end">
          <IconButton onClick={onClearButtonClick}>
            <Clear />
          </IconButton>
        </InputAdornment>
      )
    }}
  />
)

export default withStyles(styles)(SearchBox);
