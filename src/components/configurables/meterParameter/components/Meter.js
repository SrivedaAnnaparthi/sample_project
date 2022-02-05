import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
export default function SelectTextFields() {

  return (
    <Paper>

    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" gutterBottom>Abstract Values</Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <Item>Real Time Clock, Date And Time<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>RS 485 Device Address<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Activity Calendar For Time Zones</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Single Action Schedule For Billing Dates</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Image Transfer</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>LLS Secret</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>HLS Key</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Global Key Change</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Image Activation Single Action Schedule</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>ESWF</Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Metering Mode<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item>MD Reset</Item>
      </Grid>


    </Grid>
    <Typography variant="h5" gutterBottom>Electrical Values</Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <Item>Demand Integration Period<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>Profile Capture Period<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>

      <Grid item xs={6}>
      <Item>Measuring Algorithm For Active Power<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>Measuring Algorithm For Active Energy<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>

      <Grid item xs={6}>
      <Item>Measuring Algorithm For Reactive Power<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>Measuring Algorithm For Reactive Energy<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>Measuring Algorithm For Apparent Power<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
    
      </Grid>
      <Grid item xs={6}>
      <Item>Measuring Algorithm For Apparent Energy<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item>Measuring Algorithm For Power Factory<TextField sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      required
      id="standard-required"
      variant="standard"
      select
    /></Item>
      </Grid>
    </Grid>
    <Box pt={2} pb={2} >
          <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      <Button variant="contained">Clear</Button>
    </Stack></Box>
  </Box>
  </Paper>
    
  );
}