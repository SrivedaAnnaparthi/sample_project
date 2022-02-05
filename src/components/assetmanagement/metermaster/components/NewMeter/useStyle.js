import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    card: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '5px',
      textAlign: 'center',
    },
  },
  button: {
    margin: theme.spacing(1),
    color: '#0000ff',
    '&:hover': {
      backgroundColor: '#0000ff',
      color: '#fff',
  },
},
MeterMastercardfun:{
padding:'30',
marginRight:'30',
},

}))
 export default useStyles