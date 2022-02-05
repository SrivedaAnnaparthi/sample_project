import React from 'react';
import { Link, Grid, TextField, Button, InputAdornment, Stack } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//comments in login page
//commented by devi

const LoginPage = () => {

	const validationSchema = Yup.object().shape({

		username: Yup.string()
			.required('Username is required')
			.min(6, 'Username must be at least 6 characters')
			.max(20, 'Username must not exceed 20 characters'),

		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(40, 'Password must not exceed 40 characters'),

	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit = data => {
		console.log(JSON.stringify(data, null, 2));
	};

	return (
		<Grid container style={{ minHeight: '97vh' }}>
			<Grid item xs={12} sm={6}>
				<img
					src="https://d9lqarq0gr0pp.cloudfront.net/files/images/large/p/o/power-lines-against-blue-skies.jpg"
					alt="ts"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</Grid>
			<Grid
				container
				item
				xs={12}
				sm={6}
				alignItems="center"
				direction="column"
				justify="space-between"
				style={{ padding: 10 }}
			>
				<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 200 }}>
					<div style={{ height: 100 }} />
					<Grid container justify="center">
						<img
							src="https://www.pngitem.com/pimgs/m/583-5832601_101-power-station-power-plant-logo-png-transparent.png"
							alt="logo"
							width={200}
						/>
					</Grid>
					<div className="register-form">
						<form onSubmit={handleSubmit(onSubmit)} action='/'>
							<div className="form-group">
								<TextField
									variant="standard"
									label="Username"
									margin="normal"
									name="username"
									type="text"
									{...register('username')}
									className={`form-control ${errors.username ? 'is-invalid' : ''}`}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AccountCircle />{' '}
											</InputAdornment>
										)
									}}
								/>
								<div className="invalid-feedback">{errors.username?.message}</div>
							</div>
							<div className="form-group">
								<TextField
									variant="standard"
									label="Password"
									type="password"
									margin="normal"
									name="password"

									{...register('password')}
									className={`form-control ${errors.password ? 'is-invalid' : ''}`}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<LockIcon />
											</InputAdornment>
										)
									}}
								/>
								<div className="invalid-feedback">{errors.password?.message}</div>
							</div>
							<div style={{ height: 20 }} />
							{/* <Button type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }}>
								<Link href="home" color="inherit" underline="none">
									Login
								</Link>
							</Button> */}
							<div className="form-group">
							<Stack direction="row" spacing={12}>
								<Link href="home" color="inherit" underline="none">
									<Button  type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }} className="btn btn-primary">
										Login
									</Button></Link>

								<Button
									type="button"
									color="primary" size="small" variant="contained" style={{ width: '30%' }}
									onClick={() => reset()}
									className="btn btn-warning" 
								>
									Reset
								</Button>
								</Stack>
							</div>

						</form>
					</div>
				</div>

			</Grid>
		</Grid>
	);
};

export default LoginPage;
