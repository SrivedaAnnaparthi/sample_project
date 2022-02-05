import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from '@mui/material';

export default function AccountComponent() {//Profile icon to display a dropdown by clicking on it
	const [ anchorEl, setAnchorEl ] = React.useState(null);//useState(null) to set and store the data, initially anchorel is set to null
	const open = Boolean(anchorEl);//opening a dropdown 
	const handleClick = (event) => {//by clicking on profile icon , required to show the details in it
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {// handling the close event of the dropdown which is opened
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				color="inherit"
			>
				<AccountCircleIcon />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href="/" color="palevioletred" underline="none">
						Logout
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}
