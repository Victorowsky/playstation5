import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-outlined": {
      color: "#f94144",
      borderColor: "#f94144",
    },
    "& .MuiButton-outlined:hover":{
      backgroundColor: '#f94144',
      color: 'black',
      transition:"0.6s",
    }
  },
}));

export default function OutlinedButtons({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">{value}</Button>
    </div>
  );
}
