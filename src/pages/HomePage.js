import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/staticComponents/Header';
//import SideBar from '../components/staticComponents/SideBar';
import { useSelector } from 'react-redux';
import SelectedComponent from './SelectedComponent';
import DummyComponent from '../components/DummyComponent';
//import { useEffect, useRef } from 'react';
import CustomizedAccordions from '../components/staticComponents/DropDown';

const HomePage = () => {// a constant component

	//const scrolllRef = useRef(null);
	//commented by devi
	
	
	return (
		<div>
		<Grid container spacing={{ xs: 2, md: 3 }}>
		<Grid item xs={12}>
					
				</Grid>
				<Grid item xs={200}>
					<CustomizedAccordions />
				</Grid>
				
			</Grid>
		</div>
	);
};

export default HomePage;
