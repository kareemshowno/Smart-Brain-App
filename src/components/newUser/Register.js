import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
		const Copyright =()=>{
	 return (
    <Typography className='text-white' variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit"  href="#">
        Smart Brain
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = ({onRouteChange}) => {
		 const classes = useStyles();
	return (

<Container className='shadow sign_in rounded' component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar style={{backgroundColor:'#FF5EDF'}} className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography className='text-white' component="h1" variant="h5">
        Register
        </Typography>
        <form onSubmit={() => onRouteChange('home')} className={classes.form} noValidate>
         <TextField
          className='text_field'
        
            variant="filled"
            color='secondary'
            margin="normal"
            required
            fullWidth
            id="email"
       
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
          className='text_field'
        
            variant="filled"
            color='secondary'
            margin="normal"
            required
            fullWidth
            id="email"
       
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          className='text_field'
          variant="filled"
            color='secondary'
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel className='text-white'
            control={<Checkbox style={{color:'#fff'}} value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{backgroundColor:'#FF5EDF'}}
            className={classes.submit}
        
          >
            Register
          </Button>
          <Grid container>
            
            <Grid item>
              <Link className='text-white' style={{cursor:'pointer'}} onClick={() => onRouteChange('signin')} variant="body2">
                {"already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>

);
}




export default Register;



