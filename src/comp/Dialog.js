import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" style={{display:"none"}} color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <IconButton color="primary" onClick={handleClickOpen} style={{color:'white',position:'fixed', top: "2%", left:"95%", transform:"translate(-50%,0%)"}}>
  <InfoIcon />
</IconButton>
<Dialog/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{background: "#303030", color: 'white'}} id="alert-dialog-slide-title">{"Jak to działa?"}</DialogTitle>
        <DialogContent style={{background: "#303030", color: 'white'}}>
          <DialogContentText style={{background: "#303030", color: 'white'}} id="alert-dialog-slide-description">
            Co 25 sekund serwer sprawdza czy Playstation 5 jest dostępne w sklepie.
            Następnie ty dostajesz tą informacje bez konieczności odświeżania strony. 
            Jeżeli produkt bedzie dostępny to zmieni sie nazwa karty, żebyś mógł to łatwo zobaczyć.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{background: "#303030"}}>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>

        </DialogActions>
      </Dialog>
    </>
  );
}
