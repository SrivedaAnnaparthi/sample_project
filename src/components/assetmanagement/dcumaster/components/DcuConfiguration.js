import React, { useState } from 'react';
import { Card, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { SubStation } from './DropDown';

const DcuConfiguration = () => {//one of the tab to configure DCU
	const initialValues = {//assigning initial values to text fields
		dcuSerialNo: '',
		selectDCUMake: '',
		selectType: '',
		selectStatus: '',
		latitude: '',
		longitude: '',
		installeddate: '',
		commisiondate: '',
		ipAddress: '',
		firmwareVersion: '',
		hesId: ''
	};

	const [values, setValues] = useState(initialValues);// useState() hook to store initialValues
	const handleInputChange = (e) => {//changing the input as per the values
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = (e) => {// submitting the text fields' values to print at console
		e.preventDefault();
		console.log('InputFields', values);
		setValues({
			dcuSerialNo: '',
			selectDCUMake: '',
			selectType: '',
			selectStatus: '',
			latitude: '',
			longitude: '',
			installeddate: '',
			commisiondate: '',
			ipAddress: '',
			firmwareVersion: '',
			hesId: ''
		});
	};

	return (
		<form action="" onSubmit={handleSubmit}>

			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 2, width: '25ch' }
				}}
				noValidate
				autoComplete="off"
			>
				<CssBaseline />
				<Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row' }} />
				<div>
					<Grid container direction="row" justifyContent="center" alignContent="center">
						<TextField
							name="dcuSerialNo"
							id="outlined-select-currency-native"
							required
							label="DCU Serial No :"
							defaultValue=""
							value={values.dcuSerialNo}
							onChange={handleInputChange}
						/>
						<TextField
							name="selectDCUMake"
							id="outlined-select-currency-native"
							select
							required
							label="Select DCU Make :"
							value={values.selectDCUMake}
							onChange={handleInputChange}
							SelectProps={{
								native: true
							}}
						>
							{SubStation.map((option) => (
								<option key={option.label} value={option.label}>
									{option.label}
								</option>
							))}
						</TextField>
						<TextField
							name="selectType"
							id="outlined-select-currency-native"
							select
							required
							label="Select Type :"
							value={values.selectType}
							onChange={handleInputChange}
							SelectProps={{
								native: true
							}}
						>
							{SubStation.map((option) => (
								<option key={option.label} value={option.label}>
									{option.label}
								</option>
							))}
						</TextField>
						<TextField
							name="selectStatus"
							id="outlined-select-currency-native"
							select
							required
							label="Select Status :"
							value={values.selectStatus}
							onChange={handleInputChange}
							SelectProps={{
								native: true
							}}
						>
							{SubStation.map((option) => (
								<option key={option.label} value={option.label}>
									{option.label}
								</option>
							))}
						</TextField>
					</Grid>
				</div>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						name="latitude"
						id="outlined-select-currency-native"
						required
						label="Latitude(Degrees) :"
						value={values.latitude}
						onChange={handleInputChange}
						SelectProps={{
							native: true
						}}
					/>
					<TextField
						name="longitude"
						id="outlined-select-currency-native"
						required
						label="Longitude(Degrees) :"
						value={values.longitude}
						onChange={handleInputChange}
						SelectProps={{
							native: true
						}}
					/>
					<TextField
						name="installeddate"
						id="installeddate"
						label="Installed Date "
						type="date"
						value={values.installeddate}
						onChange={handleInputChange}
						sx={{ width: 220 }}
						InputLabelProps={{
							shrink: true
						}}
					/>
					<TextField
						name="commisiondate"
						id="commisiondate"
						label="Commission Date "
						type="date"
						value={values.commisiondate}
						onChange={handleInputChange}
						sx={{ width: 220 }}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<div>
						<TextField
							name="ipAddress"
							id="outlined-select-currency-native"
							required
							label="IP Address :"
							value={values.ipAddress}
							onChange={handleInputChange}
						/>
						<TextField
							name="firmwareVersion"
							id="outlined-select-currency-native"
							required
							label="Firmware Version : "
							value={values.firmwareVersion}
							onChange={handleInputChange}
						/>
						<TextField
							name="hesId"
							id="outlined-select-currency-native"
							required
							label="HES Id :"
							value={values.hesId}
							onChange={handleInputChange}
						/>
					</div>
				</Grid>
			</Box>
			<Stack spacing={2} direction="row" justifyContent="center">
				<Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
				<Button variant="outlined" color="error">
					Clear
				</Button>
			</Stack>



		</form>
	);
};
export default DcuConfiguration;
