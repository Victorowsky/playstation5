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
          borderColor: '#90be6d',
          width: '129px',
      },
      "& .MuiButton-outlined:hover":{
        backgroundColor: '#90be6d',
        color: 'black',
        transition:"0.6s",
      }
      
    },
  }));


export default function OutlinedButtons({link}) {

  const classes = useStyles();

  return (
    <div  className={classes.root}>
        <Button  variant="outlined">DOSTĘPNY</Button>
    </div>
  );
}