import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState(new Date());//useState() to set and store date

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={1}>

        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          /*minDate={new Date('2020-01-01')}
          maxDate={new Date('2022-06-01')}*/
          openTo = "year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />

      </Stack>
    </LocalizationProvider>
  );
}
