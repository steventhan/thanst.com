import React, { Component } from "react";
import { Avatar, withStyles, Chip, Grid, InputAdornment, IconButton, Typography, TextField,
  Select, MenuItem } from "@material-ui/core";
import { Clear } from "@material-ui/icons"

const keywords = ["pytorch", "machine learning"]

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  textBox: {
    width:"90%",
    maxWidth: 700
  }
}

const SearchBox = ({ text, classes, onChange, onClearButtonClick }) => (
  <div className={classes.root}>
    <TextField
      className={classes.textBox}
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
  </div>
)

export default withStyles(styles)(SearchBox);
