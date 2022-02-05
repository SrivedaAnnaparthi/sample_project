import React, { useState } from 'react';
import { Stack, Button, Box, Grid, Paper, Typography, TextField, MenuItem } from '@mui/material';

import Circle from '../utils/Circle.json';
import Divisions from '../utils/Divisions.json';
import DTR from '../utils/DTR.json';
import Feeders from '../utils/Feeders.json';
import Region from '../utils/Region.json';
import Sections from '../utils/Sections.json';
import SubStations from '../utils/SubStations.json';
import SubDivisions from '../utils/SubDivisions.json';
import Select from "react-select";
import From from "../utils/From.json";
import To from "../utils/To.json";

export default function TampersAndEvents() {

    const initialValues = {
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
    const [country, setCountry] = useState(null);

    const [lang, setLang] = useState(null);

    const [langList, setLangList] = useState([]);

 

    const [to, setTo] = useState(null);

    const [mon, setMon] = useState(null);

    const [monList, setMonList] = useState([]);

 

    const handleCountryChange = (obj) => {

      setCountry(obj);

      setLangList(obj.languages);

      setLang(null);

    };

 

    // handle change event of the language dropdown

    const handleLanguageChange = (obj) => {

      setLang(obj);

    };

    const handleCountryChang = (obj) => {

        setTo(obj);

        setMonList(obj.languages);

        setMon(null);

      };

   

      // handle change event of the language dropdown

      const handleLanguageChang = (obj) => {

        setMon(obj);

      };


    const [values, setValues] = useState(initialValues);

    const [newRegion, setnewRegion] = useState([]);

    const [circle, setCircle] = useState([]);
    const [newCircle, setnewCircle] = useState([]);

    const [division, setDivision] = useState([]);
    const [newDivision, setNewDivision] = useState([]);

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

    const onDivision = (e) => {
        console.log(e.target.value);
        const subdivs = SubDivisions.filter((subdiv) => {
            return subdiv.div_name === e.target.value;
        });
        console.log(subdivs);
        setSubDivision(subdivs);
        setDivision(e.target.value);

    };


    const onSubDivision = (e) => {
        console.log(e.target.value);
        setNewSubdiv(e.target.value);
        const subsecs = Sections.filter((subsec) => {
            return subsec.subdiv_name === e.target.value;
        });
        console.log(subsecs);
        setSection(subsecs);

    };


    const onSection = (e) => {
        console.log(e.target.value);
        setnewSec(e.target.value);
        const substas = SubStations.filter((substa) => {
            return substa.sec_name === e.target.value;
        });
        console.log(substas);
        setSubStations(substas);



    }


    const onSubStation = (e) => {
        console.log(e.target.value);
        setnewSubSta(e.target.value);
        const feeds = Feeders.filter((feed) => {
            return feed.feeder_name === e.target.value;
        });
        console.log(feeds);
        setFeeders(feeds);


    }

    const onFeeder = (e) => {
        console.log(e.target.value);
        setNewFeeder(e.target.value);
        const dtrs = DTR.filter((dt) => {
            return dt.dtr_name === e.target.value;
        });
        console.log(dtrs);
        setdtr(dtrs);


    }

    const onDtr = (e) => {
        console.log(e.target.value);
        setNewDtr(e.target.value);
    }




    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }





    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", values);
        console.log(newRegion);
        setValues({
            METER: "",
            Fromdate: "",
            todate: "",
        })
    }




    return (

        <Box sx={{ pt: 3}}>
           
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
            <Grid item xs={1}>
   <Typography>From</Typography>
   </Grid>
   <Grid item xs={2}>
  <Select
        placeholder="select Year"
        value={country}
        options={From}
        onChange={handleCountryChange}
        getOptionLabel={x => x.region}
        getOptionValue={x => x.country_code}
      />
          </Grid>
          
          <Grid item xs={3}>
          <Select
        placeholder="select month"
        value={lang}
        options={langList}
        onChange={handleLanguageChange}
        getOptionLabel={x => x.name}
        getOptionValue={x => x.month_id}
      />
        </Grid>
        <Grid item xs={1}>
   <Typography>To</Typography>
   </Grid>
        <Grid item xs={2}>
        <Select
        placeholder="select Year"
        value={to}
        options={To}
        onChange={handleCountryChang}
        getOptionLabel={x => x.region}
        getOptionValue={x => x.country_code}
      />
          </Grid>
          <Grid item xs={3}>
          <Select
        placeholder="select month"
        value={mon}
        options={monList}
        onChange={handleLanguageChang}
        getOptionLabel={x => x.name}
        getOptionValue={x => x.month_id}
      />
        </Grid>
            </Grid> 
            
              
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
           
            </Grid>          


            <Grid item xs={12} md={12}>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" color="success" onClick={handleSubmit}>SUBMIT </Button>
                    <Button variant="contained">CLEAR</Button>
                </Stack>
            </Grid>

        </Grid>
    </Box>
    );
}