import { Typography, AppBar, CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//change in app bar
const ResponsiveAppBar=()=>{
  return(
      <div>
      <CssBaseline />
      <AppBar elevation={12} position="static" style={{ background: '#c9d2d9',borderRadius:'30px' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
          <HomeIcon style={{ color: 'black' }} />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'black' }} />
        </IconButton>
        <Typography style={{ color: 'black' }}>Dashboards</Typography>
        <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'black' }} />
        </IconButton>
        <Typography style={{ marginRight: 'auto', marginLeft: '0px',color: 'black' }} variant='h6'>Tampers and Events</Typography>
      </Toolbar>
      
    </AppBar>
    
      </div>

  )
}
export default ResponsiveAppBar;