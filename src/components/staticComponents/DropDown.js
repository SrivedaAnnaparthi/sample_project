import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Badge from '@mui/material/Badge';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import MainSearch from './MainSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FastForwardIcon from '@mui/icons-material/FastForward';
import CloudIcon from '@mui/icons-material/Cloud';
import { Switch, Grid,Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SelectedComponent from '../../pages/SelectedComponent';
import DummyComponent from '../DummyComponent';
import { useDispatch ,useSelector} from 'react-redux';

const drawerWidth = 320;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
	}),
	duration: theme.transitions.duration.enteringScreen,
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	position :'static',	
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
      
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export default function MiniDrawer() {

	const [darkMode, setDarkMode] = useState(false);
	const themee = createMuiTheme({  
	  palette: {  
		type: darkMode ? "dark" : "light",  
	  },  
	})
	const component = useSelector((state) => state.componentChange.component);
  
	//useState() to store and set the data to open panel0 accordian details initially
	const [ expanded, setExpanded ] = useState('panel0');
	const dispatch = useDispatch();// useDispatch() to dispatch an action by clicking the text(label)

	//handleChange is to open panel accordian details, which is set to display the expanded accordian 
	const handleChange = (panel) => (event, newExpanded) => {//
		setExpanded(newExpanded ? panel : false);
	};
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [dashboard, setDashboard] = useState(false);
	const [asset, setAsset] = useState(false);
	const [mdm, setMdm] = useState(false);
	const [report, setReport] = useState(false);
	const [conf, setConf] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleClick = () => {
		setDashboard(!dashboard);
	};

	const handleAssect = () => {
		setAsset(!asset);
	}
	const handlemdm = () => {
		setMdm(!mdm);
	}

	const handlereport = () => {
		setReport(!report);
	}

	const handleconfi = () => {
		setConf(!conf);
	}
	return (	
	<>
		<Box sx={{ display: 'flex' }}>
		
			<CssBaseline />			
			<AppBar style={{borderRadius:'30px',background: '#29434e'}} open={open} >
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						AMI SUITE
					</Typography>
					<Tooltip title="settings" placement="top">
						<Button color="inherit">
							<StarIcon sx={{ marginLeft: 'auto' }} />
						</Button>
					</Tooltip>
					<Tooltip title="settings" placement="top">
						<Button color="inherit">
							<SettingsIcon color="inherit" />
						</Button>
					</Tooltip>
					<Tooltip title="notifications" placement="top-start">
						<Badge badgeContent={2} color="success">
							<NotificationsNoneIcon />
						</Badge>
					</Tooltip>
					<Tooltip title="search" placement="top">
						<MainSearch />						
					</Tooltip>
					
				</Toolbar>
				
			</AppBar>
			<Drawer variant="permanent" open={open} style={{background: '#29434e'}}>
				<DrawerHeader>
				<CloudIcon />
				<Typography parent variant='h4'>MDM</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				
				<List>
					<ListItemButton onClick={handleClick}>
					<ListItemIcon>
					<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboards" />
						{dashboard ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={dashboard} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3}}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText position="nonstatic"onClick={() => {
							dispatch({ type: 'meter-communication' });
						}}
						 primary="meter-communication" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'tampers-events' });
						}}
						style={{ cursor: 'pointer' }} primary="tampers-events" />
							</ListItemButton>
						</List>

					</Collapse>
					<Divider />
				</List>
				<List>
					<ListItemButton onClick={handleAssect}>
						<ListItemIcon>
							<ManageAccountsIcon />
						</ListItemIcon>
						<ListItemText primary="Asset Management" />
						{asset ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={asset} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl:  3}}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'meter-master' });
						}}
						style={{ cursor: 'pointer' }} primary="Meter Master" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'dcu-master' });
						}}
						style={{ cursor: 'pointer' }} primary="DCU Master" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'sim-master' });
						}}
						style={{ cursor: 'pointer' }} primary="SIM Master" />
							</ListItemButton>
						</List>
					</Collapse>
					<Divider />
				</List>
				<List>
					<ListItemButton onClick={handlemdm}>
						<ListItemIcon>
							<CastForEducationIcon />
						</ListItemIcon>
						<ListItemText primary="Master Data Management" />
						{mdm ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={mdm} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'billing-determinants' });
						}}
						style={{ cursor: 'pointer' }} primary="billing-determinants" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'pt-master' });
						}}
						style={{ cursor: 'pointer' }} primary="Parameter Threshold Master" />
							</ListItemButton>
						</List>
					</Collapse>
				</List>
				<Divider />
				<List>
					<ListItemButton onClick={handlereport}>
						<ListItemIcon>
							<AssessmentIcon />
						</ListItemIcon>
						<ListItemText primary="Reports" />
						{report ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={report} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'am-summary' });
						}}
						style={{ cursor: 'pointer' }} primary="Asset Mgmt-Summary" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'am-installed' });
						}}
						style={{ cursor: 'pointer' }} primary="Asset Mgmt-Installed" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'am-communicated' });
						}}
						style={{ cursor: 'pointer' }} primary="Asset Mgmt-Communicated" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'am-commissioned' });
						}}
						style={{ cursor: 'pointer' }} primary="Asset Mgmt-Commissioned" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'load-profile-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Load Profile Report" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'power-factor-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Power Factor Report" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'billing-demand-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Billing Demand Report" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon/>
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'billing-energy-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Billing Energy Report" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'billing-consumption-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Billing Consumption Report" />
							</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'event-summary-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Event Summary Report" />
								</ListItemButton>
						</List>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'event-individual-report' });
						}}
						style={{ cursor: 'pointer' }} primary="Event Individual Report" />
							</ListItemButton>
						</List>
					</Collapse>
					<Divider />
				</List>
				<List>
					<ListItemButton onClick={handleconfi}>
						<ListItemIcon>
							<ConfirmationNumberIcon />
						</ListItemIcon>
						<ListItemText primary="Configurables" />
						{conf ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={conf} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 3 }}>
								<ListItemIcon>
									<FastForwardIcon />
								</ListItemIcon>
								<ListItemText onClick={() => {
							dispatch({ type: 'meter-parameter' });
						}}
						style={{ cursor: 'pointer' }} primary="Meter Parameters" />
							</ListItemButton>
						</List>
					</Collapse>
				</List>
				<Divider />
					
			</Drawer>
			<Box component="main" sx={{ flexGrow: 10, p: 3 }}>
			<DrawerHeader />
			<Grid container spacing={5}>		
			<Grid sx={12}>
			{component ? <SelectedComponent component={component} /> : <DummyComponent />}
			</Grid>
			</Grid>
				</Box>
		</Box>
	
	</>
	);
}
