import TampersAndEvents from '../components/TampersAndEvents';
import '../../../reports/loadProfileReport/utils/task.css';
import { Grid ,Card } from '@mui/material';
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

        <Grid item xs={12}>
        <Card elevation={10} sx={{ pt: -19, pb: -8, pl: 1 ,maxHeight:390}} style={{borderRadius:20}}>
          <TampersAndEvents/>
          </Card>
        </Grid>

        </Grid>

     

    </div>
  );
}

export default TampersAndEventsPage;
