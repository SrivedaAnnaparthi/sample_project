import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function SeasonsContent() {// to show season's content
	// useState() is a hook to store and to set the from date and to date
	const [ inputFields, setInputFields ] = useState([ { fromdate: '', todate: '' } ]);

	const handleChangeInput = (index, event) => {// event to change input value as per the index value
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
	};

	return (
		<Grid spacing={3}>
			<Stack spacing={2} direction="row">
				<Grid item xs={5}>
					<TextField
						name="fromdate"
						type="date"
						label="Holiday Date"
						variant="standard"
						value={inputFields.date}
						onChange={(event) => handleChangeInput(event)}
					/>
				</Grid>
				<Grid item xs={2}>
					<TextField
						name="todate"
						type="date"
						label="Holiday Date"
						variant="standard"
						value={inputFields.date}
						onChange={(event) => handleChangeInput(event)}
					/>
				</Grid>
			</Stack>
		</Grid>
	);
}

export default function Seasons() {
	const handleSubmit = (e) => {// submitting the values and printing them on console
		e.preventDefault();
		console.log('submitted');
	};

	const clearField = () => {// to show a pop-up, displaying that "elements cleared"
		alert('elements cleared');
	};
	return (
		<form onSubmit={handleSubmit}>
			<Grid
				container
				rowSpacing={5}
				columnSpacing={{ xs: 1, sm: 1, md: 1 }}
				justifyContent="center"
				sx={{ marginLeft: 'auto' }}
				alignItems="center"
				justify="center"
			>
				<Grid item xs={2} />
				<Grid item xs={3}>
					<Typography variant="h7" gutterBottom>
						Season 1 :
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<SeasonsContent />
				</Grid>
				<Grid item xs={2} />
				<Grid item xs={2} />
				<Grid item xs={3}>
					<Typography variant="h7" gutterBottom>
						Season 2 :
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<SeasonsContent />
				</Grid>
				<Grid item xs={2} />
				<Grid item xs={2} />
				<Grid item xs={3}>
					<Typography variant="h7" gutterBottom>
						Season 3 :
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<SeasonsContent />
				</Grid>
				<Grid item xs={2} />
				<Grid item xs={2} />
				<Grid item xs={3}>
					<Typography variant="h7" gutterBottom>
						Season 4 :
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<SeasonsContent />
				</Grid>
				<Grid item xs={2} />

				<Grid container direction="column" alignItems="center" justify="center" paddingTop={2}>
					<Stack spacing={2} direction="row">
						<Button variant="outlined" type="reset" color="error" onClick={clearField}>
							Clear
						</Button>

						<Button variant="contained" onClick={handleSubmit}>
							Submit
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</form>
	);
}
