import React from "react";
import { TextField, Button, Grid, Stack } from "@mui/material";
import useStyles from "./useStyle";
import {useState} from "react";

const Metermaster = () => {
  const verifyField = () => {
    alert("verified")
  }
  const clear = () => {
    alert("cleared")
  }
  // State to store value from the input field
  const [inputValue, setInputValue] = useState("");

  // Input Field handler
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("");
  };
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form noValidate autoComplete="off">
        <h5> Please Enter & Verify The Consume Number
          <br />Before Proceeding</h5>
        <br />

        <TextField id="Consumer No" label="Consumer Service No" variant="standard" value={inputValue} onChange={handleUserInput} />
        <Button onClick={verifyField}>Verify</Button>

      </form>
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="error" onClick={clear,resetInputField}>Clear</Button>
      </Stack>
    </Grid>
  )
}
export default Metermaster;
