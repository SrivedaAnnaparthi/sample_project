import { Grid } from '@mui/material';
import React from 'react';
import DropDown from './DropDown';

const SideBar = () => {
	return (
		<Grid container>
			<Grid item>
				<DropDown />
			</Grid>
		</Grid>
	);
};

export default SideBar;
