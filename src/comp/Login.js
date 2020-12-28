import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
        color : 'white'
    },


  },
}));

export default function FormPropsTextFields({login, setLogin, password , setPassword, handleLogin}) {
  const classes = useStyles();

  return (
      <>
    <form  className={classes.root} noValidate autoComplete="off">


      <div style={{display: 'flex', flexDirection: "column", height:'200px'}}>
        <TextField 
        style={{margin:"15px", background: '#212121', borderRadius:'5px'}}
          id="outlined-required"
          label="Login"
          variant="outlined"
          onChange={(e)=>{setLogin(e.target.value)}}
          value={login}
        />

        <TextField
        style={{margin:"15px", background: '#212121', borderRadius:'5px'}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
        />
        <button style={{display:'none'}} onClick={handleLogin} type="submit"></button>
        

      </div>
    </form>
      <Button onClick={handleLogin} variant="contained" style={{width:"fit-content", alignSelf: 'center'}}>Log in</Button>
      </>

  );
}
