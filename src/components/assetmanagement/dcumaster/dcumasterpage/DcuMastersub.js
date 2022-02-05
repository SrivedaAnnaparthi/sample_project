import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownClass() {//Function to display dropdowns
	const [ phase, setMeter ] = React.useState('');// useState() hook to store data of phase and to set meter
	const handleChange = (event) => {//Function to change meter data
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
					<MenuItem value={10}></MenuItem>
					<MenuItem value={20}>Dcu Installed</MenuItem>
					<MenuItem value={30}>Dcu Stores</MenuItem>
					<MenuItem value={40}>Dcu Retired</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
