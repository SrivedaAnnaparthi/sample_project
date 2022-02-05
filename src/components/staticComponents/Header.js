import { Grid } from '@mui/material';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloudIcon from '@mui/icons-material/Cloud';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import MainSearch from './MainSearch';
import AccountComponent from './AccountComponent';

const Header = () => {
	return (
		<Grid container>
			<AppBar position="fixed" >
				<Toolbar>
					<Grid container spacing={2}>
						<Grid item xs={1}>
							<CloudIcon />
						</Grid>
						<Grid item xs={2}>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								AMI SUITE
							</Typography>
						</Grid>
					</Grid>
					<Menu>
						<MenuItem />
					</Menu>
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
					<Tooltip title="profile" placement="top-start">
						<Button color="inherit">
							<AccountComponent />
						</Button>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};

export default Header;
