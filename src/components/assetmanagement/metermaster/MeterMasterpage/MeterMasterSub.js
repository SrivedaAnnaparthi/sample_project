import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MeterMasterSub() {
  const [phase, setMeter] = React.useState('');
  const handleChange = (event) => {
    setMeter(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter the value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={phase}
          label="Enter the value"
          onChange={handleChange}
        >
          <MenuItem value={10}>South</MenuItem>
          <MenuItem value={20}>North</MenuItem>
          <MenuItem value={30}>East</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}