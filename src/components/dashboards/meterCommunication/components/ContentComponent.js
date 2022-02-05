import React, { useState } from 'react';
import { Stack, Button, Box, Grid, Typography, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';


import Divisions from '../utils/Divisions.json';
import SubDivisions from '../utils/SubDivisions.json';
import Sections from '../utils/Sections.json';
import SubStations from '../utils/SubStations.json';
import Feeders from '../utils/Feeders.json';
import DTR from '../utils/DTR.json';
import Region from '../utils/Region.json';
import Circle from '../utils/Circle.json';  

export default function ContentComponent() {//contains textfields and dropdowns 

  const initialValues = {// initializing empty values to textfields' and dropdowns' 
    Region: "",
    Circle: "",
    Division: "",
    SubDivision: "",
    Sections: "",
    SubStations: "",
    Feeder: "",
    DTR: "",
    METER: "",
    Fromdate: "",
    todate: "",
  };

  //useState(initialValues) hook is used to set and store initialized values 
  const [values, setValues] = useState(initialValues);
  const [newRegion, setnewRegion] = useState([]);
  const [circle, setCircle] = useState([]);
  const [newCircle, setnewCircle] = useState([]);

  //useState([]) hook is used to set and store division to empty array initially
  const [division, setDivision] = useState([]);
  const [newDivision, setNewDivision] = useState([]);

  //useState([]) hook is used to set and store sub-division to empty array initially
  const [subDivision, setSubDivision] = useState([]);
  const [newSubdiv, setNewSubdiv] = useState([]);

  const [section, setSection] = useState([]);
  const [newSec, setnewSec] = useState([]);

  const [subStations, setSubStations] = useState([]);
  const [newSubSta, setnewSubSta] = useState([]);

  const [feeders, setFeeders] = useState([]);
  const [newFeeder, setNewFeeder] = useState([]);

  const [dtr, setdtr] = useState([]);
  const [newDtr, setNewDtr] = useState([]);

 
  const onRegion = (e) => {
    console.log(e.target.value);
    const circ = Circle.filter((cir) => {
      return cir.reg_name === e.target.value;
    })
    console.log(circ);
    setCircle(circ);
    setnewRegion(e.target.value);
  }
 //function to filter the circle' according to the selection of region
  const onCircle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const divs = Divisions.filter((div) => {
      return div.cir_name === e.target.value;
    });
    console.log(divs);
    setNewDivision(divs);
    setnewCircle(e.target.value);
  };



  //function to filter the sub divisions' according to the selection of division

  const onDivision = (e) => {
    console.log(e.target.value);
    const subdivs = SubDivisions.filter((subdiv) => {
      return subdiv.div_name === e.target.value;
    });
    console.log(subdivs);
    setSubDivision(subdivs);
    setDivision(e.target.value);

  };

  //function to filter the sections' according to the selection of sub-divisions
  const onSubDivision = (e) => {
    console.log(e.target.value);
    setNewSubdiv(e.target.value);
    const subsecs = Sections.filter((subsec) => {
      return subsec.subdiv_name === e.target.value;
    });
    console.log(subsecs);
    setSection(subsecs);
    setnewSec(e.target.value);
  };

  //function to filter the sub-stations' according to the selection of sections
  const onSection = (e) => {
    console.log(e.target.value);
    setnewSec(e.target.value);
    const substas = SubStations.filter((substa) => {
      return substa.sec_name === e.target.value;
    });
    console.log(substas);
    setSubStations(substas);
    setnewSubSta(e.target.value);


  }

  //function to filter the Feeders' according to the selection of sub-stations
  const onSubStation = (e) => {
    console.log(e.target.value);
    setnewSubSta(e.target.value);
    const feeds = Feeders.filter((feed) => {
      return feed.feeder_name === e.target.value;
    });
    console.log(feeds);
    setFeeders(feeds);
    setNewFeeder(e.target.value);

  }

  //function to filter distribution transformers'(DTR) according to the selection of feeders
  const onFeeder = (e) => {
    console.log(e.target.value);
    setNewFeeder(e.target.value);
    const dtrs = DTR.filter((dt) => {
      return dt.dtr_name === e.target.value;
    });
    console.log(dtrs);
    setdtr(dtrs);
    setNewDtr(e.target.value);

  }

  //function to select a DTR dropdown
  const onDtr = (e) => {
    console.log(e.target.value);
    setNewDtr(e.target.value);
  }

  const handleInputChange = e => {//function to change value on clicking, any of the options
    const { name, value } = e.target
    setValues({
      ...values, [name]: value
    })
  }

  const handleSubmit = (e) => {//submitting input fields' values to console/DB
    e.preventDefault();
    console.log("InputFields", values);
    setValues({
      Region: "",
      Circle: "",
      Division: "",
      SubDivision: "",
      Sections: "",
      SubStations: "",
      Feeder: "",
      DTR: "",
      METER: "",
      Fromdate: "",
      todate: "",
    })
  }


  return (
    <div>
      <Box sx={{ display: 'flex', pt: 3,pb:28, m: 1, flexDirection: 'row' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Typography >
              Discom : TSSPDCL
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Region"
            variant="standard"
            name="Region"
            value={newRegion}
            onChange={onRegion}
          >
            {Region.map(item => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}

          </TextField>
 
          </Grid>
          <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Circle"
            variant="standard"
            name="Circle"
            value={newCircle}
            onChange={onCircle}
          >
            {circle.map(item => (
              <option value={item.name} key={item.cir_id}>
                {item.name}
              </option>
            ))}

          </TextField>
          </Grid>

          <Grid item xs={3}>
          <TextField
            name="division"
            select
            fullWidth
            variant="standard"
            color="primary"
            label="select division"
            onChange={onDivision}
            value={division}
          >
            {newDivision.map((division) => (
              <MenuItem value={division.name} key={division.div_id}>
                {division.name}
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              variant="standard"
              color="primary"
              label="select subdivision"
              onChange={onSubDivision}
              value={newSubdiv}
            >
              {subDivision.map((subdiv) => (
                <MenuItem value={subdiv.name} key={subdiv.name}>
                  {subdiv.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              variant="standard"
              color="primary"
              label="sections"
              onChange={onSection}
              value={newSec}
            >
              {section.map((sec) => (
                <MenuItem value={sec.name} key={sec.section_id}>
                  {sec.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              variant="standard"
              color="primary"
              label="Sub Stations"
              onChange={onSubStation}
              value={newSubSta}
            >
              {subStations.map((sta) => (
                <MenuItem value={sta.name} key={sta.subsection_id}>
                  {sta.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              variant="standard"
              color="primary"
              label="Feeders"
              onChange={onFeeder}
              value={newFeeder}
            >
              {feeders.map((fee) => (
                <MenuItem value={fee.name} key={fee.feeder_id}>
                  {fee.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              variant="standard"
              color="primary"
              label="DTR"
              onChange={onDtr}
              value={newDtr}
            >
              {dtr.map(item => (
                <option key={item.name} value={item.dtr_id}>
                  {item.name}
                </option>
              ))}

            </TextField>
          </Grid>




          <Grid item xs={3}>
            <TextField
              id="outlined-select-currency-native"
              required label="METER"
              name="METER"
              variant="standard"
              value={values.METER}

              onChange={handleInputChange}
            >

            </TextField>
          </Grid>
          <Grid item xs={6}>

          </Grid>

          <Grid item xl={6} md={3} xs={6} sm={6}>

            <TextField name='Fromdate' label="Fromdate" type="date" value={values.date} sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xl={6} md={3} xs={6} sm={6}>
            <TextField

              name='todate'

              label="Todate"

              type="date"

              value={values.date}

              sx={{ width: 220 }}

              InputLabelProps={{

                shrink: true,

              }}

              onChange={handleInputChange}

            />
          </Grid>


          <Grid item xs={12} md={12}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" color="success" onClick={handleSubmit}>SUBMIT </Button>
              <Button variant="contained">CLEAR</Button>
            </Stack>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}