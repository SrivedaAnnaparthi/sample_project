import { Typography, AppBar,  CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BasicTabs from '../dcumasterpage/DCUMaster';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar=()=>{//Header
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return(
		<div>
		<CssBaseline />
		<AppBar position="static" style={{ background: '#2E3B55' }} sx={{ display: 'flex' }}>
		<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 'px',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					
		  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
			<HomeIcon style={{ color: 'white' }} />
		  </IconButton>
		  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
			<ChevronRightIcon style={{ color: 'white' }} />
		  </IconButton>
		  <Typography>Asset Management</Typography>
		  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
			<ChevronRightIcon style={{ color: 'white' }} />
		  </IconButton>
		  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>DCU Master</Typography>
		</Toolbar>
		
	  </AppBar>
	  <BasicTabs/>
		</div>
  
	)
  }
  export default NavBar;