import {React,useState} from "react";
import { TextField, Button, Grid } from "@mui/material";


const Change = () => {
    const verifyField = () => {
        alert("verified")
    }
    const clear = () => {
        alert("verified")
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
            <h5>Please Enter & Verify the Consume Number Before Proceeding</h5> <br></br>
            <TextField id="Consumer No" label="Consumer Service No" variant="standard" value={inputValue} onChange={handleUserInput}/>
            <Button onClick={verifyField}>Verify</Button>

            <Button variant="outlined" color="error" onClick={clear,resetInputField}>Clear</Button>
        </Grid>
    )
}
export default Change
