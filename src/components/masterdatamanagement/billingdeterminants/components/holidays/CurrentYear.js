import React, { useState } from 'react';
import { Grid, TextField, Button, Box } from '@mui/material';
import { Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './UseStyle';

export default function CurrentYear() {
	const classes = useStyles();//useStyles() custom styling hook assigned to classes variable
	//state to store and set the input fields values
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), holidayName: '', date: '' } ]);

	const handleSubmit = (e) => {//submit the values to console
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (index, event) => {// to change the input value
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
	};

	const handleAddFields = () => {// to add fields
		setInputFields([ ...inputFields, { id: uuidv4(), holidayName: '', date: '' } ]);
	};

	const handleRemoveFields = (id) => {// to remove fields
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};
	const clearField = () => {// function to show a pop-up to display "elements cleared"
		alert('elements cleared');
	};
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				'& > :not(style)': { m: 1 }
			}}
		>
			<Grid container direction="row">
				<form className={classes.root} onSubmit={handleSubmit}>
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
									name="holidayName"
									label="Holiday Name"
									variant="standard"
									value={inputField.holidayName}
									onChange={(event) => handleChangeInput(index, event)}
								/>
								<TextField
									name="date"
									type="date"
									label="Holiday Date"
									variant="standard"
									value={inputField.date}
									onChange={(event) => handleChangeInput(index, event)}
								/>

								<IconButton onClick={handleAddFields}>
									<AddCircleIcon />
								</IconButton>
							</Stack>
						</div>
					))}
					<br />
					<Grid container direction="column" alignItems="center" justify="center">
						<Stack spacing={2} direction="row">
							<Button variant="outlined" type="reset" color="error" onClick={clearField}>
								Clear
							</Button>

							<Button variant="contained" onClick={handleSubmit}>
								Submit
							</Button>
						</Stack>
					</Grid>
				</form>
			</Grid>
		</Box>
	);
}
