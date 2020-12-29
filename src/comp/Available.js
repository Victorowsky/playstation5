import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiButton-outlined':{
          color :'#90be6d',
          borderColor: '#90be6d'
      },
      
    },
  }));


export default function OutlinedButtons({link}) {

  const classes = useStyles();

  return (
    <div  className={classes.root}>
        <Button variant="outlined">DOSTĘPNY</Button>
    </div>
  );
}