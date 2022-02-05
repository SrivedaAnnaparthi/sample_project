import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { v4 as uuidv4 } from 'uuid';
import useStyles from '../holidays/UseStyle';

export default function CurrentYear() {
	// useStyles() is a custom styling hook to style this component by assigning it to a variable
	const classes = useStyles();
	//useState() is a hook to store and set the input values with respect to id
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), timezone1: '', timezone2: '' } ]);

	const handleSubmit = (e) => {//submitting input values to print them on console
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (index, event) => {// handle the event by changing the value in input field in accordance of index
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
	};

	const handleAddFields = () => {// to add text fields
		setInputFields([ ...inputFields, { id: uuidv4(), timezone1: '', timezone2: '' } ]);
	};

	const handleRemoveFields = (id) => {// to remove text fields
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};
	const clearField = () => {// to show a pop-up, which contains 'elements cleared'
		alert('elements cleared');
	};
	return (
		<form className={classes.root} onSubmit={handleSubmit} sx={{ m: 1, minWidth: 120 }}>
			<Grid container direction="row" justifyContent="center" alignContent="center">
				{inputFields.map((inputField, index) => (
					<div key={index}>
						<Stack spacing={2} direction="row">
							<IconButton
								disabled={inputFields.length === 1}
								onClick={() => handleRemoveFields(inputField.id)}
							>
								<RemoveCircleIcon />
							</IconButton>

							<TextField
								name="timezone1"
								type="time"
								variant="standard"
								helperText="Enter From Time"
								value={inputField.holidayName}
								onChange={(event) => handleChangeInput(index, event)}
							/>
							<TextField
								name="timezone2"
								type="time"
								helperText="Enter To Time"
								variant="standard"
								value={inputField.date}
								onChange={(event) => handleChangeInput(index, event)}
							/>
							<FormGroup>
								<FormControlLabel name="switch" control={<Switch defaultChecked />} label="Active" />
							</FormGroup>
							<IconButton onClick={handleAddFields}>
								<AddCircleIcon />
							</IconButton>
						</Stack>
					</div>
				))}
			</Grid>

			<br />
			<Grid container direction="column" alignItems="center" justify="center">
				<Stack spacing={2} direction="row">
					<Button variant="outlined" type="reset" color="inherit" onClick={clearField}>
						Clear
					</Button>

					<Button variant="contained" onClick={handleSubmit}>
						Submit
					</Button>
				</Stack>
			</Grid>
		</form>
	);
}
