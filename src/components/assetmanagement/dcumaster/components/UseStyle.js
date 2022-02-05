import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({//custom styling hook
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	button: {
		margin: theme.spacing(1)
	}
}));
export default useStyles;
