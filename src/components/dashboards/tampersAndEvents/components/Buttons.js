import { Button, Stack } from '@mui/material';

const Buttons = () => {
    return (

        <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" color="success">SUBMIT </Button>
        <Button variant="contained"color="warning">CLEAR</Button>
      </Stack>

       /* <Grid container>
            <Grid item xs={6}>
                <Button style={{ borderRadius: '20px', width: '90px', marginLeft: '50%'}} size="small" variant="constant" >
                    Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button style={{ borderRadius: '20px', width: '90px', marginLeft: '50%' }} size="small" variant="constant">
                    Clear</Button>
            </Grid>
        </Grid>*/
    );
}

export default Buttons;