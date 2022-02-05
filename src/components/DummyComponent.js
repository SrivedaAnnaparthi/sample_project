import { CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';

const DummyComponent = () => {
	return (
		<div>
			<CssBaseline />
			<Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
				<Grid margin-top="20py" xs={2}>
					<Typography variant='h1'>DashBoard</Typography>	
				</Grid>
			
			</Grid>
		</div>
	);
};

export default DummyComponent;
