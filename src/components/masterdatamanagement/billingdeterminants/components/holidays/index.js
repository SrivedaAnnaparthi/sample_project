import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PreviousYear from './PreviousYear';
import CurrentYear from './CurrentYear.js';
import NextYear from './NextYear';

function TabPanel(props) {//changing the tabs by clicking the respective tabs
	const { children, value, index, ...other } = props;//respective props 

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {// using proptypes to specify the data type and to pass the data
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {//returning the specific id, respective clicks on the tab
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

export default function Holidays() {
	const theme = useTheme();//useTheme() is a custom styling hook, assigned to a variable
	const [ value, setValue ] = React.useState(0);// useState(0) is the hook to set and store the value to 0

	const handleChange = (event, newValue) => {//to change the year value
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {// to change the index value on swiping right to left in UI
		setValue(index);
	};

	return (
		<Box sx={{ width: 500, borderColor: 'primary.main' }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="inhiritance"
					variant="fullWidth"
					aria-label="action tabs example"
				>
					<Tab label="Previvous Year" {...a11yProps(0)} />
					<Tab label="Current Year" {...a11yProps(1)} />
					<Tab label="Next Year" {...a11yProps(2)} />
				</Tabs>
			</AppBar>

			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<PreviousYear />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<CurrentYear />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<NextYear />
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}
