import { Typography, AppBar,Card,Grid, CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ContentComponent from './ContentComponent';

const MenuAppBar=()=>{// MenuAppBar component
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
        <Typography>Dashboards</Typography>
        <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'white' }} />
        </IconButton>
        <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Meter Communication</Typography>
      </Toolbar>
      
    </AppBar>
    <div>
    <Card elevation={8}>
    <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
              <ContentComponent />
            </Grid>
            <Grid item xs={1}>

            </Grid>

          </Grid>
          </Card>
      </div>
      </div>

  )
}
export default MenuAppBar