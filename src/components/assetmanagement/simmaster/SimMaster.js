import React, { useState } from 'react';
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	Stack,
	Button,
	Typography,
	Box,
	TextField,
	Grid,
	Card,
	Paper
} from '@mui/material';
import { simTypes, DCU } from './Dropdowns';
import { CssBaseline } from '@material-ui/core';
import SimAppBar from './Header';

export default function SimMaster() {
	const initialValues = {// initiating values to text fields
		selectServiceProvider: '',
		selectServiceType: '',
		phone: '',
		simNumber: '',
		selectServiceNumber: '',
		apnName: '',
		ipType: '',
		typeOfIp: '',
		ipAddress: ''
	};

	const [values, setValues] = useState(initialValues);//useState() to store and set inititalValues
	const handleInputChange = (e) => {//changing option values in dropdowns 
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};
	const handleSubmit = (e) => {//submitting text fields data to print on console
		e.preventDefault();
		console.log('InputFields', values);
		setValues({
			selectServiceProvider: '',
			selectServiceType: '',
			phone: '',
			simNumber: '',
			selectServiceNumber: '',
			apnName: '',
			ipType: '',
			typeOfIp: '',
			ipAddress: ''
		});
	};

	return (
		<div>
			
			<SimAppBar />
		<br/>
			<Card elevation={10} sx={{ pt: -19, pb: -8, pl: 1 ,maxHeight:400}} style={{borderRadius:20}}>
			
			<Box sx={{ display: 'Auto', pt: 6,pb:10, m: 1, flexDirection: 'row' }}>
					
						<Grid container rowSpacing={4} columnSpacing={ 4 }>
						<Grid item xs={2}/>
							
						  <Grid item xs={3}>
						<TextField
						fullWidth
							id="outlined-select-currency-native"
							select
							required
							label=" Select Service Provider"
							SelectProps={{
								native: true
							}}
							name="selectServiceProvider"
							value={values.selectServiceProvider}
							onChange={handleInputChange}
						>
							{simTypes.map((item) => (
								<option key={item.label} value={item.label}>
									{item.label}
								</option>
							))}
						</TextField>
						</Grid>
								<Grid item xs={3}>
						<TextField
						fullWidth
							id="outlined-select-currency-native"
							select
							required
							label=" Select Service Type"
							SelectProps={{
								native: true
							}}
							name="selectServiceType"
							value={values.selectServiceType}
							onChange={handleInputChange}
						>
							{simTypes.map((item) => (
								<option key={item.label} value={item.label}>
									{item.label}
								</option>
							))}
						</TextField>
                        </Grid>
						<Grid item xs={3}>
						
						
							<TextField
							fullWidth
								id="outlined-select-currency-native"
								required
								label="Phone"
								name="phone"
								value={values.phone}
								onChange={handleInputChange}
							>
								</TextField>
								</Grid>
								<Grid item xs={2}/>
								<Grid item xs={3}>
							<TextField
							fullWidth
								id="outlined-select-currency-native"
								required
								label="SIM Number"
								name="simNumber"
								value={values.simNumber}
								onChange={handleInputChange}
							>
								</TextField>

						
					
					</Grid>
					
					<Grid item xs={3}>

						
							<TextField
							fullWidth
								id="outlined-select-currency-native"
								select
								required
								label=" Select Service Number DCU"
								SelectProps={{
									native: true
								}}
								name="selectServiceNumber"
								value={values.selectServiceNumber}
								onChange={handleInputChange}
							>
								{DCU.map((item) => (
									<option key={item.label} value={item.label}>
										{item.label}
									</option>
								))}
							</TextField>
							</Grid>
							<Grid item xs={3}>

							<TextField
							fullWidth
								id="outlined-select-currency-native"
								required
								label="APN Name"
								name="apnName"
								value={values.apnName}
								onChange={handleInputChange}
						>
							</TextField>
						
					</Grid>
					<Grid item xs={2} />
						<Grid item xs={3} >
								<FormControl component="fieldset">
									<Typography variant="h6" alignItems="center">
										IP Type
									</Typography>

									<RadioGroup
										row
										aria-label="IP type"
										name="ipType"
										value={values.ipType}
										onChange={handleInputChange}
									>
										<FormControlLabel value="static" control={<Radio />} label="Static" />
										<FormControlLabel value="dynamic" control={<Radio />} label="Dynamic" />
									</RadioGroup>
								</FormControl>
							</Grid>

							<Grid item xs={3}>
								<FormControl component="fieldset">
									<Typography variant="h6" alignItems="center">
										Type of IP
									</Typography>
									<RadioGroup
										row
										aria-label="Type of IP"
										name="typeOfIp"
										value={values.typeOfIp}
										onChange={handleInputChange}
									>
										<FormControlLabel value="IPV4" control={<Radio />} label="IPV4" />
										<FormControlLabel value="IPV6" control={<Radio />} label="IPV6" />
									</RadioGroup>
								</FormControl>{' '}
							</Grid>
						
								<Grid item xs={4}>	
						<TextField
						
							id="outlined-select-currency-native"
							native="outlined"
							required
							label="IP Address"
							name="ipAddress"
							value={values.ipAddress}
							onChange={handleInputChange}
						>
							{' '}
						</TextField>
						</Grid>
						<Grid item xs={12} md={12}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" color="success" onClick={handleSubmit}>SUBMIT </Button>
              <Button variant="contained">CLEAR</Button>
            </Stack>
          </Grid>
						</Grid>
								
					</Box>

				
			</Card>
			
		</div>
	);
}
