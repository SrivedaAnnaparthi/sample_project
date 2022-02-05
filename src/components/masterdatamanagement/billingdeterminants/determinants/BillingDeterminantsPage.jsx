import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import { Typography, AppBar, Box, CssBaseline, Toolbar, IconButton } from '@mui/material';
import Timezone from '../components/timezones/TimeZone';
import Holidays from '../components/holidays';
import { Grid } from '@mui/material';
import Seasons from '../components/seasons/Seasons'
import { flexbox } from '@mui/system';
import TabList from '@mui/lab/TabList';
import { TabContext } from '@mui/lab';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function TabPanel(props) {// function for tabpanel to align content horizontally 
  const { children, value, index, ...other } = props;//respective props, to use in below code

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {// using proptypes to specify the data type and to pass the data
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {//returning the specific id, respective clicks on the tab
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BillingDeterminants() {
  const [value, setValue] = React.useState(0);// State to store value from the input field and to set the value

  const handleChange = (event, newValue) => {//function to set the new changed value
    setValue(newValue);
  };


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
        <Typography>Meter Data Management</Typography>
        <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
          <ChevronRightIcon style={{ color: 'white' }} />
        </IconButton>
        <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Billing Determinants</Typography>
      </Toolbar>
      
    </AppBar>
    


      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'primary', width: flexbox }}>



          
            <Grid container justifyContent="center" sx={{ 'marginLeft': 'auto' }} alignItems="center" justify="center" >

              <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: 'primary.main' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">


                    <Tabs value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullwidth"
                      aria-label="full width tabs example">

                      <Tab icon={<AccessTimeFilledIcon />} label="Timezones" {...a11yProps(0)} />
                      <Tab icon={<HolidayVillageIcon />} label="Holidays" {...a11yProps(2)} />
                      <Tab icon={<WaterDamageIcon />} label="Seasons" {...a11yProps(4)} />

                    </Tabs>
                  </TabList>
                </Box>
              </TabContext>
            </Grid>
          

        </Box>
        <Grid container justifyContent="center" sx={{ 'marginLeft': 'auto' }} alignItems="center"  >


          <TabPanel value={value} index={0}>
            <Timezone />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Holidays />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Seasons />
          </TabPanel>

        </Grid>
      </Box>
    </div>
  );
}