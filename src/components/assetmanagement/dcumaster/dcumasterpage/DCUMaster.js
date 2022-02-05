import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DcuConfiguration from '../components/DcuConfiguration';
import Make from '../components/Make';
import Type from '../components/Type';
import Status from '../components/Status';
import Change from '../components/Change';

function TabPanel(props) {//changing the tabs by clicking the respective tabs
	const { children, value, index, ...other } = props;//respective props 

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index) {//returning the specific id, respective of clicks on the tab
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

export default function BasicTabs() {//used to provide dynamicness to tabs 
	const [ value, setValue ] = React.useState(0);// State to store value from the input field
	const handleChange = (event, newValue) => {//function to change the tab content when we click on the respective tab
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Make" {...a11yProps(0)} />
					<Tab label="Type" {...a11yProps(1)} />
					<Tab label="Status" {...a11yProps(2)} />
					<Tab label="Change" {...a11yProps(3)} />
					<Tab label="DCU Configuration" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Make />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Type />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Status />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Change />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<DcuConfiguration />
			</TabPanel>
		</Box>
	);
}
