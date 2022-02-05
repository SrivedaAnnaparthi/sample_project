import * as React from 'react';
import { TextField, Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function BasicDatePicker() {//function to pick the data
  //useState(null) hook is to set and store the date value, initial value will be null
  const [value, setValue] = React.useState(null);

  return (

    <Grid container spacing={2}>
      <Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="enter date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}