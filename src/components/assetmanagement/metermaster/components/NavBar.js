import { Typography, AppBar,  CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavBar=()=>{//Header
	return(
		<div>
		<CssBaseline />
		<AppBar position="static" style={{ background: '#2E3B55' }}>
		<Toolbar>
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
		  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Meter Search</Typography>
		</Toolbar>
		
	  </AppBar>
	  
		</div>
  
	)
  }
  export default NavBar;