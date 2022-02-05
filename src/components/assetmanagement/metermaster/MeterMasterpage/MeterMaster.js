import { React, useState } from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import MeterMasterSub from "./MeterMasterSub";
import { styled } from '@mui/material/styles';
import { Button, MenuItem } from "@mui/material";
import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import useStyles from "../components/NewMeter/useStyle";
import { CssBaseline } from '@mui/material';
//import { dropdowns, Circle, Division, SubDivision, Section, SubStation, Feeder, DTR } from './Dropdowns'
import Divisions from '../utils/Divisions.json';
import SubDivisions from '../utils/SubDivisions.json';
import Sections from '../utils/Sections.json';
import SubStations from '../utils/SubStations.json';
import Feeders from '../utils/Feeders.json';
import DTR from '../utils/DTR.json';
import Region from '../utils/Region.json';
import Circle from '../utils/Circle.json';
import { useDispatch } from "react-redux";

const MeterMaster = () => {
    const dispatch = useDispatch();

    const classes = useStyles();//here we are using the styles component from styles.js
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
        ServiceNo: "",
        ConsumerName: "",
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
            ServiceNo: "",
            ConsumerName: "",
        })
    }
    return (
        <card >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <CssBaseline />

                <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
                </Box>


                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <TextField
                        id="outlined-select-currency-native"
                        required
                        label="Discom:"
                        defaultValue="TSSCPDL"
                    >
                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        fullWidth
                        required label="Region"
                        variant="outlined"
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


                    <TextField
                        id="outlined-select-currency-native"
                        select
                        fullWidth
                        required label="Circle"
                        variant="outlined"
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

                    <TextField
                        name="division"
                        select
                        fullWidth
                        variant="outlined"
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

                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
                        color="primary"
                        label="subdivision"
                        onChange={onSubDivision}
                        value={newSubdiv}
                    >
                        {subDivision.map((subdiv) => (
                            <MenuItem value={subdiv.name} key={subdiv.name}>
                                {subdiv.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
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

                    <TextField
                        select
                        fullWidth
                        variant="outlined"
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
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
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

                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <div>
                        <TextField
                            select
                            fullWidth
                            variant="outlined"
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
                        <TextField
                            id="outlined-select-currency-native"
                            required
                            label="Meter No: "
                            value={values.METER}
                            onChange={handleInputChange}
                        ></TextField>
                    </div>

                    <div>
                        <TextField
                            id="outlined-select-currency-native"
                            required label="Service No: "
                        >
                        </TextField>
                        <TextField
                            id="outlined-select-currency-native"
                            required label="ConsumerName: "
                        ></TextField>
                    </div>
                </Grid>
            </Box>

            <Stack paddingTop={2} spacing={3} direction="row" justifyContent="center">
                <Button variant="contained" onClick={() => dispatch({ type: 'search' })}>                    SEARCH
                </Button>
                <Button variant="contained" >CLEAR</Button>
                <Button variant="contained" onClick={() => dispatch({ type: 'new-meter' })}> NEW METER</Button>
            </Stack>
            <br />
        </card>
    )
}
export default MeterMaster;