import React from 'react';
import MeterParameters from '../components/MeterParameters';
import SearchAppBar from '../components/Header';
import Meter from '../components/Meter';


import { Container, Grid } from '@material-ui/core';

function MeterParameter() {
    return (
        <div>

            <SearchAppBar />
            <br />

            <Container maxidth="lg">
                <Grid container justify="space-between" alignItems="center" spacing={3}>
                    <Grid item xl={12} sl={7}>
                    <MeterParameters/>
                    </Grid>
                </Grid>
            </Container>
            <Container maxidth="lg">
                <Grid container justify="space-between" alignItems="center" spacing={3}>
                    <Grid item xl={12} sl={7}>
                        <Meter />
                        
                    </Grid>
                </Grid>

            </Container>

            </div>

    );
}
export default MeterParameter;

