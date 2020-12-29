import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
      '& .MuiButton-outlined':{
          color :'#f94144',
          borderColor: '#f94144'
      },     
    },
  }));


export default function OutlinedButtons({link}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button variant="outlined">NIEDOSTĘPNY</Button>
    </div>
  );
}