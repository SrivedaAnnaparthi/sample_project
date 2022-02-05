import TampersAndEvents from '../components/TampersAndEvents';
import '../../../reports/loadProfileReport/utils/task.css';
import { Grid } from '@mui/material';
import ResponsiveAppBar from '../components/Header';


function TampersAndEventsPage() {
  return (
    <div className="App">

      <Grid container rowSpacing={5} spacing={5}>

        <Grid item xs={12} md={12}>

          <ResponsiveAppBar

          />

        </Grid>

        </Grid>

        <Grid container rowSpacing={3} columnSpacing={2}>

            <Grid item xs={1}>



            </Grid>

        <Grid item xs={10}>

          <TampersAndEvents/>

        </Grid>

        </Grid>

     

    </div>
  );
}

export default TampersAndEventsPage;
