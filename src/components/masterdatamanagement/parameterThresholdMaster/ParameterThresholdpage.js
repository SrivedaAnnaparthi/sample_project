import { CssBaseline } from '@mui/material';
import React from 'react';
import PTAppBar from './ptcChildComponents/PTAppbar';
import PTMCard from './ptcChildComponents/PTMCard';

export default function ParameterThresholdpage() {
	return (
		<div>
			<CssBaseline />
			<PTAppBar />
			<PTMCard />
		</div>
	);
}
