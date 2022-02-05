import React from 'react';
import { useState } from 'react';
import { Button, Grid, Typography,CssBaseline, Box, TextField, AppBar, Toolbar } from '@mui/material';
import { dtr, Feeder, Section, SubStation } from './Dropdown';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';


export default function EventSummeryReport() {
    const initialValues = {//setting the initial Values to text fields 
        sections: "",
        substation: "",
        feeder: "",
        dtr: "",
        meter: "",
        fromdate: "",
        todate: ""
    };

    const [values, setValues] = useState(initialValues);//useState() hook is used to set and store values
    const handleInputChange = e => {//to take the entered input values from input fields 
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleSubmit = (e) => {// submitting the text fields values to print it on console/DB
        e.preventDefault();
        console.log("InputFields", values);
        setValues({
            sections: "",
            substation: "",
            feeder: "",
            dtr: "",
            meter: "",
            fromdate: "",
            todate: ""
        })

    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
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
                            <Typography>Reports</Typography>
                            <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
                                <ChevronRightIcon style={{ color: 'white' }} />
                            </IconButton>
                            <Typography style={{ marginRight: 'auto', marginLeft: '0px' }} variant='h6'>Events Summary Report</Typography>
                        </Toolbar>

                    </AppBar>
                </div>
                <form action="" onSubmit={handleSubmit}>

                    <Grid container direction="row" justifyContent="center" alignContent="center" paddingTop={5}>
                        <TextField
                            name='sections'
                            select
                            required label="Sections:"
                            value={values.sections}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Section.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='substation'
                            id="outlined-select-currency-native"
                            select
                            required label="Sub Station:"
                            value={values.substation}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {SubStation.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='feeder'
                            id="outlined-select-currency-native"
                            select
                            required label="Feeder:"
                            value={values.feeder}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Feeder.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            name='dtr'
                            id="outlined-select-currency-native"
                            select
                            required label="DTR:"
                            value={values.dtr}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {dtr.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='meter'
                            id="outlined-basic"
                            label="METER"
                            variant="outlined"
                            value={values.meter}
                            onChange={handleInputChange}
                        >
                            {SubStation.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>



                    <Grid container direction="row" justifyContent="center" alignContent="center" >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6" display="inline">
                                If you already know the meter number, please enter here :</Typography>
                            <TextField />
                        </div>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignContent="cen   ter" >
                        <div component="form" noValidate spacing={3}>
                            <Typography variant="h7" display="inline">
                                From : </Typography>

                            <TextField
                                name='fromdate'
                                id="fromdate"
                                label="From "
                                type="date"
                                value={values.fromdate}
                                onChange={handleInputChange}
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </div>
                        <div>
                            <Typography variant="h7" display="inline">
                                To : </Typography>


                            <TextField
                                name='todate'
                                id="todate"
                                label="To"
                                type="date"
                                value={values.todate}
                                onChange={handleInputChange}
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </div>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignContent="right" paddingTop={3} >

                        <Grid item xs={2} spacing={1} justify="flex-end">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >Submit</Button>
                        </Grid>
                        <Grid item xs={0} spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="reset"
                                onClick={() => {
                                    alert('After submitting data cannot be deleted, would you like to proceed?');
                                }}
                            >Clear</Button>

                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
}

