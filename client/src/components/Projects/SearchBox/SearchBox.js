import React from "react";
import { withStyles,  InputAdornment, IconButton, TextField } from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 15
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
      helperText={"Search phrases can be comma-separated, and are regex enabled. For example: machine learning, ^ReactJS$, mongo"}
      FormHelperTextProps={{ style: { lineHeight: 1.25 } }}
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
