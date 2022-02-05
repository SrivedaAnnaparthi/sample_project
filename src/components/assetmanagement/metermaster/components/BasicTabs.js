import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab,Typography,Box,Grid, CssBaseline} from '@mui/material';
import Metermaster from './NewMeter/Metermaster';
import Category from './NewMeter/Category';
import Make from './NewMeter/Make';
import Type from './NewMeter/Type';
import ClassofAccuracy from './NewMeter/ClassOfAccuracy';
import Status from './NewMeter/Status';
import Change from './NewMeter/Change';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <CssBaseline/>
    <Grid container direction="column" alignItems="center" justify="center">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Meter Master" {...a11yProps(0)} />
          <Tab label="Category" {...a11yProps(1)} />
          <Tab label="Make" {...a11yProps(2)} />
          <Tab label="Type" {...a11yProps(3)} />
          <Tab label="Class Of Accuracy" {...a11yProps(4)} />
          <Tab label="Status" {...a11yProps(5)} />
          <Tab label="Change" {...a11yProps(6)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Metermaster />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Category />

      </TabPanel>

      <TabPanel value={value} index={2}>
        <Make />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Type />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ClassofAccuracy />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Status />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Change />
      </TabPanel>
    </Box>
    </Grid>
    </div>
  );
}
