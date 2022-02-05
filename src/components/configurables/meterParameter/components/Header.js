import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CssBaseline, IconButton } from '@mui/material'

export default function SearchAppBar() {
  return (
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
  <Typography>Configurables</Typography>
  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'white' }} />
  </IconButton>
  <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Meter Parameters</Typography>
</Toolbar>

</AppBar>
  </div>
  );
}

