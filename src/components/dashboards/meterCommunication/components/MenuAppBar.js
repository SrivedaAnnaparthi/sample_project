import { Typography, AppBar,Card,Grid, CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ContentComponent from './ContentComponent';

const MenuAppBar=()=>{// MenuAppBar component
  return(
      <>
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
        <Typography style={{ marginRight: 'auto', marginLeft: '0px', color: 'black' }} variant='h6'>Meter Communication</Typography>
      </Toolbar>
      
    </AppBar><br/>
    <div>
    <Card elevation={10} sx={{ pt: -19, pb: -4, pl: 1 ,maxHeight:375}} style={{borderRadius:20}}>
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
      </>

  )
}
export default MenuAppBar